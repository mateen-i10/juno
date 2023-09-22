import React from 'react';
import { ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import Icon from "src/@core/components/icon";
import {useTheme} from "@mui/material/styles";
import withActionsMenu from "../../../../components/hoc/general-table/withActionMenu";

interface IProps {
  row: any,
  DeleteFunc? : (val: any) => void,
}
const IndustryTableActions = ({row}:IProps) => {
  const theme = useTheme()

  console.log('industry row', row)

  return (
    <>
        <MenuItem>
          <ListItemIcon>
            <Icon style={{color: theme.palette.primary.dark}} icon='tabler:edit' fontSize={20} />
          </ListItemIcon>
          <ListItemText primary='Edit' />
        </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Icon style={{color: theme.palette.primary.dark}} icon='clarity:tasks-line' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Change Status' />
      </MenuItem>

    </>
  );
};

export default withActionsMenu(IndustryTableActions);
