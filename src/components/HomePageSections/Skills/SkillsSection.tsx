"use client";
import {
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { skillSelectors } from "@/store/SkillState/selector";
import UserChip from "@/components/UserChip/UserChip";

export default function SkillsSection() {
  const [search, setSearch] = useState<string>("");
  const allSkills = useSelector(skillSelectors.allSkills);

  console.log(allSkills);

  return (
    <Container
      disableGutters
      //   REMOVE ME
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="standard"
            fullWidth
            placeholder="Explore my skill set"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!!search && (
                    <IconButton
                      aria-label="clear"
                      onClick={() => setSearch("")}
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  )}
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
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            spacing={2}
            pt={2}
            gap="20px"
          >
            {allSkills.map((skill, idx) => (
              <UserChip key={idx} skill={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
