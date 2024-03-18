import { NextRequest, NextResponse } from "next/server";

type HandlerCallback<T extends {}> = (
  req: NextRequest,
  requestBody: T
) => Promise<NextResponse> | NextResponse;

type ValidateRequestResponse<T> = {
  requestBody: T;
};

export async function withHandler<TRequestBody extends {} = {}>(
  handler: HandlerCallback<TRequestBody>
) {
  return async (request: NextRequest): Promise<any> => {
    const { requestBody } = await getRequestBody(request.json());

    return executeHandler(request, requestBody as TRequestBody, handler);
  };
}

async function executeHandler<TRequestBody extends {} = {}>(
  request: NextRequest,
  requestBody: TRequestBody,
  handler: HandlerCallback<TRequestBody>
) {
  try {
    const res = await handler(request, requestBody as TRequestBody);

    if (res.status > 299) {
      let pld: unknown = undefined;

      try {
        pld = await res.clone().text();
      } catch (e) {
        //ignore
      }

      console.log("Error", request, requestBody);
    }

    return res;
  } catch (error) {
    console.log("Error", request, requestBody);

    return NextResponse.json("Error processing request", {
      status: 500,
    });
  }
}

async function getRequestBody<T>(
  bodyStream: Promise<T>
): Promise<ValidateRequestResponse<T | null>> {
  let requestBody = null;

  try {
    requestBody = await bodyStream;
  } catch (e) {
    // ignore
  }

  return {
    requestBody,
  };
}
