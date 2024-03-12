"use client";

import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SkillFilter, searchActions } from "@/store/SearchSlice/reducer";
import { searchSelectors } from "@/store/SearchSlice/selector";
import {
  Skill,
  SkillCategory,
  SkillProficiency,
} from "@/store/SkillState/reducer";
import { YearsOfExperience } from "@/store/SearchSlice/reducer";

enum SkillSearchCollection {
  Search = 1,
  Category = 2,
  Proficiency = 3,
}

export default function SkillSearchFilters() {
  const skillFilters = useSelector(searchSelectors.skillSearchFilters);
  const dispatch = useDispatch();

  const handleFilterUpdate = (updatedFilters: SkillFilter) => {
    dispatch(searchActions.setSkillFilters(updatedFilters));
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
      case SkillSearchCollection.Category:
        handleFilterUpdate({
          ...skillFilters,
          category: null,
        });
        break;
      case SkillSearchCollection.Proficiency:
        handleFilterUpdate({
          ...skillFilters,
          proficiency: null,
        });
        break;
      default:
        return;
    }
  };

  const handleCategoryChange = (val: string) => {
    const updatedFilter: SkillFilter = {
      ...skillFilters,
      category: parseInt(val),
    };

    handleFilterUpdate(updatedFilter);
  };

  const handleProficiencyChange = (val: string) => {
    const updatedFilter: SkillFilter = {
      ...skillFilters,
      proficiency: parseInt(val),
    };

    handleFilterUpdate(updatedFilter);
  };

  const handleYearsOfExperienceChange = (val: string) => {
    const updatedFilter: SkillFilter = {
      ...skillFilters,
      proficiency: parseInt(val),
    };

    handleFilterUpdate(updatedFilter);
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
          value={skillFilters.category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          select
          label="Technology Category"
          variant="standard"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    transition: "all 0.6s",
                    opacity: skillFilters.category !== null ? 100 : 0,
                    cursor:
                      skillFilters.category !== null ? "pointer" : "default",
                    marginRight: "20px",
                  }}
                  aria-label="clear"
                  onClick={() =>
                    handleClearCollection(SkillSearchCollection.Category)
                  }
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={SkillCategory.Language}>Language</MenuItem>
          <MenuItem value={SkillCategory.FrontEnd}>Front End</MenuItem>
          <MenuItem value={SkillCategory.BackEnd}>Back End</MenuItem>
          <MenuItem value={SkillCategory.Mobile}>Mobile</MenuItem>
          <MenuItem value={SkillCategory.DatabaseTechnology}>
            Database Technology
          </MenuItem>
          <MenuItem value={SkillCategory.CloudService}>Cloud Services</MenuItem>
          <MenuItem value={SkillCategory.Other}>Other</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          value={skillFilters.proficiency}
          onChange={(e) => handleProficiencyChange(e.target.value)}
          select
          label="Proficiency Level"
          variant="standard"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    transition: "all 0.6s",
                    opacity: skillFilters.proficiency !== null ? 100 : 0,
                    cursor:
                      skillFilters.proficiency !== null ? "pointer" : "default",
                    marginRight: "20px",
                  }}
                  aria-label="clear"
                  onClick={() =>
                    handleClearCollection(SkillSearchCollection.Proficiency)
                  }
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={SkillProficiency.SomeKnowledge}>
            Some Knowledge
          </MenuItem>
          <MenuItem value={SkillProficiency.Beginner}>Beginner</MenuItem>
          <MenuItem value={SkillProficiency.Intermediate}>
            Intermediate
          </MenuItem>
          <MenuItem value={SkillProficiency.Advanced}>Advanced</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          value={skillFilters.yearsOfExperience}
          onChange={(e) => handleYearsOfExperienceChange(e.target.value)}
          select
          label="Years of Experience"
          variant="standard"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    transition: "all 0.6s",
                    opacity: skillFilters.yearsOfExperience !== null ? 100 : 0,
                    cursor:
                      skillFilters.yearsOfExperience !== null
                        ? "pointer"
                        : "default",
                    marginRight: "20px",
                  }}
                  aria-label="clear"
                  onClick={() =>
                    handleClearCollection(SkillSearchCollection.Category)
                  }
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={YearsOfExperience.OneToTwo}> 1 - 2 Years</MenuItem>
          <MenuItem value={YearsOfExperience.TwoToThree}>2 - 3 Years</MenuItem>
          <MenuItem value={YearsOfExperience.ThreeOrMore}>
            {" "}
            More than 3 Years
          </MenuItem>
        </TextField>
      </Grid>
    </>
  );
}
