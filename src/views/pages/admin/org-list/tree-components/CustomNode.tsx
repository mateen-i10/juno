import React, {useState} from "react";
import { getDescendants, NodeModel } from "@minoru/react-dnd-treeview";

// @ts-ignore
import styles from "src/views/pages/admin/signup-requests/tree-components/TreeViewCss.module.css";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {Icon} from "@iconify/react";

const TREE_X_OFFSET = 22;

const Node: React.FC<{
  node: NodeModel;
  depth: number;
  isOpen: boolean;
  isDropTarget: boolean;
  treeData: NodeModel[];
  onDelete: (id: NodeModel["id"]) => void;
  onClick: (id: NodeModel["id"]) => void;
  handleSubmit: (id: NodeModel["id"]) => void;
  handleTextChange: (id: NodeModel["id"], value: string) => void;
  getPipeHeight: (id: string | number, treeData: NodeModel[]) => number;
}> = ({
        node,
        depth,
        isOpen,
        isDropTarget,
        onClick,
        handleSubmit,
        handleTextChange,
        treeData,
        getPipeHeight,
        onDelete
      }) => {
  const indent = depth * TREE_X_OFFSET;

  const [hover, setHover] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(node.id);
  };

  const [feildsShow, setFieldsShow] = useState(false)
  const [text, setText] = useState("");

  const [showEditFeild, setShowEditFeild] = useState(false)
  const [editText, seteditText] = useState("")

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChangeEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditText(e.target.value)
  }

  const handleReset = () => {
    setText("");
    seteditText("")
  }

  if (node.parent === 0) {
    node.droppable = true
    delete node.data
  }

  const handleEnter = (key:any) => {
    if (key.keyCode === 13) {
      // @ts-ignore
      handleSubmit({text, parent: node.id, droppable: true, data: {fileType: "image", fileSize: "2.1MB"}})
      setFieldsShow(false)
      handleReset()
    }
  }

  const handleEditEnter = (key:any) => {
    if (key.keyCode === 13) {
      // @ts-ignore
      handleTextChange(node.id, editText)
      setShowEditFeild(false)
      handleReset()
    }
  }


  return (
    <div
      className={`${styles.nodeWrapper} tree-node ${
        node.droppable && isDropTarget ? styles.dropTarget : ""
      }`}
      style={{ marginInlineStart: indent }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      /* eslint-disable-next-line @typescript-eslint/no-empty-function */
      onClick={feildsShow === true || showEditFeild === true ? () => {} : handleToggle}
    >

      <Icon color={treeData.find(t => t.parent === node.id) ? "#00498f" : "#BEBFC5"} icon={ treeData.find(t => t.parent === node.id) ? ( isOpen ? "material-symbols:folder-open" : "fa6-solid:folder-closed") : "fluent-mdl2:server-enviroment"} />

      <div
        className={styles.pipeX}
        style={{ width: depth > 0 ? TREE_X_OFFSET - 9 : 0 }}
      />
      {getDescendants(treeData, node.parent)[0].id === node.id && (
        <div
          className={styles.pipeY}
          style={{
            height: Math.max(0, getPipeHeight(node.parent, treeData) - 8)
          }}
        />
      )}
      <div className={styles.labelGridItem}>
        <Grid container>
          <Grid item>
            {showEditFeild && <TextField
              autoFocus={true}
              label="Text"
              fullWidth
              type='string'
              size="small"
              onKeyDown={handleEditEnter}
              onChange={handleChangeEditText}
              value={editText}
              placeholder='Enter New Node text'/>}
          </Grid>

          <Grid item style={{marginTop: feildsShow ? 11 : 0}}>
            {showEditFeild ? '' : <div style={{display: "flex"}}>
              {node.text}
              {node.parent === 0 ? <div style={{marginTop: showEditFeild ? 8 : -1, marginLeft: 3}}>(root)</div> : ""}
            </div>}
          </Grid>

          <Grid item>
            {showEditFeild && <div>
              <Icon fontSize={22} style={{marginTop: 10}} icon="mdi:tick-circle-outline" color="#93C572" onClick={() => {
                // @ts-ignore
                handleTextChange(node.id, editText)
                setShowEditFeild(false)
              }} />
              <Icon fontSize={22} style={{marginTop: 10}} icon="ic:outline-cancel" color="#c04d4d" onClick={() => setShowEditFeild(false)} />
            </div>}
          </Grid>

          <Grid>
            {showEditFeild === true || feildsShow === true ? "" : <Icon fontSize={22} style={{marginLeft: 5, marginTop: feildsShow ? 9 : -2}} color="#00498f" icon="tabler:edit" onClick={() => {
              seteditText(node.text)
              setShowEditFeild(true)
            }}/>}
          </Grid>

          <Grid item ml={5}>
            {feildsShow && (
              <TextField
                autoFocus={true}
                label="Text"
                fullWidth
                type='string'
                size="small"
                onKeyDown={handleEnter}
                onChange={handleChangeText}
                value={text}
                placeholder='Enter New Node text'/>)}
          </Grid>

          <Grid item>
            {feildsShow && text && (
              <IconButton size="small" style={{marginTop: 3}} onClick={() => {
                // @ts-ignore
                handleSubmit({text, parent: node.id, droppable: true, data: {fileType: "image", fileSize: "2.1MB"}})
                setFieldsShow(false)
                handleReset()
              }}>
                <Icon icon="uil:save" style={{color: "rgb(0 33 205)"}} />
              </IconButton>)}
          </Grid>

          <Grid item>
            {feildsShow && (
              <IconButton size="small" style={{marginTop: 3, marginLeft: 0}} onClick={() => {
                setFieldsShow(false)
                handleReset()
              }}>
                <Icon icon="ic:outline-cancel" style={{color: "#c04d4d"}} />
              </IconButton>)}
          </Grid>

        </Grid>
      </div>

          <div style={{display: "flex"}}>
            <div className={`${styles.expandIconWrapper} ${isOpen ? styles.isOpen : ""}`}>
            {treeData.find(t => t.parent === node.id) ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5866 5.99969L7.99997 8.58632L5.41332 5.99969C5.15332 5.73969 4.73332 5.73969 4.47332 5.99969C4.21332 6.25969 4.21332 6.67965 4.47332 6.93965L7.5333 9.99965C7.59497 10.0615 7.66823 10.1105 7.7489 10.144C7.82957 10.1775 7.91603 10.1947 8.0033 10.1947C8.09063 10.1947 8.1771 10.1775 8.25777 10.144C8.33837 10.1105 8.41163 10.0615 8.4733 9.99965L11.5333 6.93965C11.7933 6.67965 11.7933 6.25969 11.5333 5.99969C11.2733 5.74635 10.8466 5.73969 10.5866 5.99969Z"
                  fill="black"
                />
              </svg>
            ): ""}
            </div>

            <div>
              {hover && (
                <div style={{display: "flex"}}>
                  <div>
                    <IconButton size="small" onClick={() => onDelete(node.id)}>
                      <Icon icon="ic:outline-delete" style={{color: "#c04d4d"}} />
                    </IconButton>
                  </div>
                  {feildsShow === false ? <div>
                    <IconButton size="small" onClick={() => {
                      setFieldsShow(true)
                    }}>
                      <Icon icon="ic:outline-add" style={{color: "green"}} />
                    </IconButton>
                  </div> : ""}
                </div>
              )}
            </div>

          </div>

    </div>
  );
};

export default Node;
