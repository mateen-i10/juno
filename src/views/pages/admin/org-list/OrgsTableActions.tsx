import React from 'react';
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import Icon from "src/@core/components/icon";
import {appRoutes} from "../../../../routes/client-app-routes";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import withActionsMenu from "../../../components/hoc/general-table/withActionMenu";

interface IProps {
  row: any,
  DeleteFunc? : (val: any) => void,
}
const OrgsTableActions = ({row}:IProps) => {
  const theme = useTheme()

  console.log('orgs row', row)

  return (
    <>
      <Link href={`${appRoutes.orgList}/${row.id}`}  style={{textDecoration: "none"}} >
        <MenuItem>
          <ListItemIcon>
            <Icon style={{color: theme.palette.primary.dark}} icon='tabler:edit' fontSize={20} />
          </ListItemIcon>
          <ListItemText primary='Edit' />
        </MenuItem>
      </Link>
      <MenuItem>
        <ListItemIcon>
          <Icon style={{color: theme.palette.primary.dark}} icon='clarity:tasks-line' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Change Status' />
      </MenuItem>

    </>
  );
};

export default withActionsMenu(OrgsTableActions);
