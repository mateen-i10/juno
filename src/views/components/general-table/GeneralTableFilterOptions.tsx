import {FormControl, Grid, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {TableFilters} from "./GeneralTableFilterDropdown";
import {useTheme} from "@mui/material/styles";

type Props = {
  options: TableFilters[]
  handleChange: (e: any, index: number) => void
}
const GeneralTableFilterOptions = ({options, handleChange}: Props) => {
  const theme = useTheme()

  return <Grid container spacing={3} sx={{padding: theme.spacing(3)}} >
    {options.map((option, index) => (
      <Grid item xs={option.col} key={option.label}>
        <FormControl fullWidth size="small">
          <InputLabel id={`select-${option.label}`}>{option.label}</InputLabel>
          <Select
            fullWidth
            label={option.label}
            value={option.selectedValue ?? option.selectedValue}
            id={`select-${option.label}`}
            labelId={`select-${option.label}`}
            onChange={(e) => handleChange(e, index)}
          >
            {option.values.map(val => (
              <MenuItem key={val.value} value={val.value}>{val.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    ))}
  </Grid>
}

export default GeneralTableFilterOptions
