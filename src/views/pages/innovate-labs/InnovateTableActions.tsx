import React from 'react';
import {IconButton} from "@mui/material";
import Icon from "../../../@core/components/icon";

interface IProps {
  DeleteFunc? : (val: any) => void,
  row: any,
}

// @ts-ignore
const InnovateTableActions = ({DeleteFunc, row}:IProps) => {

  return (
    <div>
      {<IconButton aria-label='capture screenshot'  size='large' onClick={(e) => {
        e.preventDefault()

        // isEditFunc(row)
      }}>
        <Icon style={{ fontWeight: 200}} icon='tabler:edit' fontSize={20} />
      </IconButton>}
      {row && <IconButton aria-label='capture screenshot' size='large'
                                   onClick={() => DeleteFunc?.(row)}
      >
        <Icon icon='tabler:trash' fontSize={20} />
      </IconButton>}
    </div>
  );
};

export default InnovateTableActions;
