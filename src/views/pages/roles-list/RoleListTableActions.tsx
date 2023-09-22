import React from 'react';
import {IconButton} from "@mui/material";
import Icon from "../../../@core/components/icon";
import Link from "next/link";
import {appRoutes} from "../../../routes/client-app-routes";

interface IProps {
  DeleteFunc? : (val: any) => void,
    row: any,
}
const RoleListTableActions = ({DeleteFunc, row}:IProps) => {

  return (
    <div>
      <Link href= {`${appRoutes.rolesList}/${row?.id}?roles-details`}>
        <IconButton aria-label='capture screenshot'  size='large'>
          <Icon style={{ fontWeight: 200}} icon='tabler:edit' fontSize={20} />
        </IconButton>
      </Link>
      {row && <IconButton aria-label='capture screenshot' size='large'
                                   onClick={() => DeleteFunc?.(row)}
      >
        <Icon icon='tabler:trash' fontSize={20} />
      </IconButton>}
    </div>
  );
};

export default RoleListTableActions;
