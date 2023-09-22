import React from 'react';
import {IconButton} from "@mui/material";
import Icon from "../../../@core/components/icon";
import {useTheme} from "@mui/material/styles";
import Link from "next/link";
import {appRoutes} from "../../../routes/client-app-routes";
import Button from "@mui/material/Button";

interface IProps {
  isDeleteFunc? : (val: any) => void,
  isEditFunc? : (val: any) => void,
  row?: any,
  isDetailEye?: boolean
  isSelectbtn?: boolean
}
const GeneralActions = ({isDeleteFunc, isEditFunc, row, isDetailEye, isSelectbtn}:IProps) => {
  const theme = useTheme()

  return (
    <div>
      {isSelectbtn && <Button size="small" variant="contained" onClick={() => console.log(row.id)}>Select</Button>}
      {isDetailEye && <IconButton aria-label='capture screenshot' color='secondary' size='large' >
        <Link href={`${appRoutes.customerManagement}/${row.id}${appRoutes.customerDetail}`} style={{textDecoration: "none"}} >
          <Icon style={{color: theme.palette.secondary.dark, fontWeight: 200}} icon='tabler:eye' fontSize={20} />
        </Link>
      </IconButton>}
      {isEditFunc && <IconButton aria-label='capture screenshot'  size='large' onClick={(e) => {
        e.preventDefault()
        isEditFunc(row)
      }}>
        <Icon style={{ fontWeight: 200}} icon='tabler:edit' fontSize={20} />
      </IconButton>}
      {isDeleteFunc && <IconButton aria-label='capture screenshot' size='large' onClick={() => isDeleteFunc(row)}>
        <Icon icon='tabler:trash' fontSize={20} />
      </IconButton>}
    </div>
  );
};

export default GeneralActions;
