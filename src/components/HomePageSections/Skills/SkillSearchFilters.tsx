"use client";

import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { skillSelectors } from "@/store/SkillState/selector";
import { SkillFilter, skillActions } from "@/store/SkillState/reducer";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

enum SkillSearchCollection {
  Search = 1,
}

export default function SkillSearchFilters() {
  const skillFilters = useSelector(skillSelectors.skillFilters);
  const dispatch = useDispatch();

  const handleFilterUpdate = (updatedFilters: SkillFilter) => {
    dispatch(skillActions.setSkillFilters(updatedFilters));
  };

  const [tempSearch, setTempSearch] = useState(skillFilters.search);

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setTempSearch(e?.target?.value ?? ""),
    []
  );

  useEffect(() => {
    setTempSearch(skillFilters.search);
  }, [skillFilters.search]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleFilterUpdate({
        ...skillFilters,
        search: tempSearch,
      });
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [tempSearch]);

  const handleClearCollection = (collection: SkillSearchCollection) => {
    switch (collection) {
      case SkillSearchCollection.Search:
        handleFilterUpdate({
          ...skillFilters,
          search: "",
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          value={tempSearch}
          onChange={handleSearchChange}
          variant="standard"
          fullWidth
          placeholder="Explore my skill set"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    transition: "all 0.6s",
                    opacity: tempSearch ? 100 : 0,
                    cursor: tempSearch ? "pointer" : "default",
                  }}
                  aria-label="clear"
                  onClick={() =>
                    handleClearCollection(SkillSearchCollection.Search)
                  }
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Technology Category"
          variant="standard"
          fullWidth
        >
          <MenuItem>Front End</MenuItem>
          <MenuItem>Back End</MenuItem>
          <MenuItem>Mobile</MenuItem>
          <MenuItem>Framework</MenuItem>
          <MenuItem>Database Technology</MenuItem>
          <MenuItem>Cloud Services</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Proficiency Level"
          variant="standard"
          fullWidth
        >
          <MenuItem>Beginner</MenuItem>
          <MenuItem>Intermediate</MenuItem>
          <MenuItem>Advanced</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          label="Years of Experience"
          variant="standard"
          fullWidth
        >
          <MenuItem> &gt; 1 Year</MenuItem>
          <MenuItem> 1 - 2 Years</MenuItem>
          <MenuItem>2 - 3 Years</MenuItem>
          <MenuItem> {"<"} 3 Years</MenuItem>
        </TextField>
      </Grid>
    </>
  );
}
