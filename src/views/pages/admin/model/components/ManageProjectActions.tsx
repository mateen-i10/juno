import withActionsMenu from "../../../../components/hoc/general-table/withActionMenu";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import Icon from "../../../../../@core/components/icon";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import {appRoutes} from "../../../../../routes/client-app-routes";

const ManageProjectActions = ({row}: any) => {
  console.log('row in manage College Action', row)
  const theme = useTheme()

  return <>
    <Link href={`${appRoutes.modelList}/${row.id}${appRoutes.editModel}`} style={{textDecoration: "none"}} >
      <MenuItem>
        <ListItemIcon>
          <Icon style={{color: theme.palette.primary.dark}} icon='icon-park-twotone:file-staff-one' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Edit' />
      </MenuItem>
    </Link>
    <Link href={`${appRoutes.modelList}`} style={{textDecoration: "none"}} >
      <MenuItem>
        <ListItemIcon>
          <Icon style={{color: theme.palette.primary.dark}} icon='clarity:tasks-line' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Change Status' />
      </MenuItem>
    </Link>

  </>
}

export default withActionsMenu(ManageProjectActions)
