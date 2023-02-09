import React, { useState } from "react";
import { Box, Button as MyButton, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BasicTiles from "../components/common/basicTiles";
import Button from "../components/common/controls/Button";
import ItemList from "../constants/componentlist";
import "./dashboard.scss";
import Label from "../components/common/controls/Label";
import RadioSingle from "../components/common/controls/RadioSingle";
import RadioGroupList from "../components/common/controls/RadioGroupList";
import CustomDate from "../components/common/customDate";
import moment from "moment";
import FileUpload from "../components/common/controls/FileUpload";
import LoadSpinner from "../components/common/LoadSpinner";
import Toggle from "../components/common/controls/Toggle";
import Modal from "../components/common/Modal";
import Textarea from "../components/common/controls/Textarea";
import Select from "../components/common/controls/Select";
import SelectBox from "../components/common/controls/SelectBox";
import Checkbox from "../components/common/controls/Checkbox";
import CheckboxList from "../components/common/controls/CheckboxList";
import oneInActive from "../assets/CheckboxList/1.jpg";
import twoInActive from "../assets/CheckboxList/2.svg";
import threeInActive from "../assets/CheckboxList/3.svg";
import oneIcon from "../assets/CheckboxList/one.png";
import twoIcon from "../assets/CheckboxList/two.svg";
import threeIcon from "../assets/CheckboxList/three.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  tabIndexValue: number;
  style?: React.CSSProperties;
}
// interface FilterProps {
//   fromDate: string;
//   toDate: string;
// }
const useStyles = makeStyles((theme) => ({
  othersLabelStyles: {
    fontSize: "16px",
    color: "#F37878",
  },
}));

const checkboxListData = [
  {
    title: "One",
    value: "1",
    icon: oneIcon,
    inActiveIcon: oneInActive,
  },
  {
    title: "Two",
    value: "2",
    icon: twoIcon,
    inActiveIcon: twoInActive,
  },
  {
    title: "Three",
    value: "3",
    icon: threeIcon,
    inActiveIcon: threeInActive,
  },
];

const Dashboard = () => {
  const classes = useStyles();
  // const [loading, setLoading] = useState(false); //temprary should be true later
  const loading = false;
  const [itemIndexValue, setItemIndexValue] = useState(0);
  const [genderValue, setGenderValue] = useState("MALE");
  const [isLoading, setIsLoading] = useState(false);
  const [togleEnable, setTogleEnable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState("");
  const [checkList, setCheckList] = useState([...checkboxListData]);
  // const [filters, setFilters] = useState({
  //   fromDate: "",
  //   toDate: "",
  // } as FilterProps);

  const [open, setOpen] = useState(false);

  const handleItemClick = (e) => {
    const dataTab = e.target.getAttribute("data-tab");
    if (dataTab) {
      setItemIndexValue(Number(dataTab));
      return;
    }
    const nodeName = e.target.nodeName;
    if (nodeName === "path") {
      const tabVal = e.target.parentNode.getAttribute("data-tab");
      setItemIndexValue(Number(tabVal));
    }
  };
  const ListItemPanel = (props: TabPanelProps) => {
    const { children, tabIndexValue, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={tabIndexValue !== index}
        id={`column-two-tabpanel-${index}`}
        aria-labelledby={`column-two-tabs-${index}`}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          padding: "0 5px",
          // textAlign: 'justify',
        }}
        {...other}
      >
        {tabIndexValue === index && (
          // @ts-ignore
          <Box
            sx={{
              p: 0,
              // minWidth: "50%",
              // maxWidth: '50%',
              width: "50%",
              // textAlign: 'left',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            {children}
          </Box>
        )}
      </div>
    );
  };

  const tileData = { value: 10, title: "Tile Example" };
  // const radioData = [
  //   {
  //     key: "TRUST",
  //     label: "Trust",
  //     enabled: true,
  //     parentKey: null,
  //   },
  //   {
  //     key: "SOCIETY",
  //     label: "Society",
  //     enabled: true,
  //     parentKey: null,
  //   },
  //   {
  //     key: "SECTION_8",
  //     label: "Section 8",
  //     enabled: true,
  //     parentKey: null,
  //   },
  //   {
  //     key: "SECTION_25",
  //     label: "Section 25",
  //     enabled: true,
  //     parentKey: null,
  //   },
  // ];

  const GENDER = [
    {
      key: "MALE",
      label: "Male",
      enabled: true,
      parentKey: null,
    },
    {
      key: "FEMALE",
      label: "Female",
      enabled: true,
      parentKey: null,
    },
  ];

  const selectData = [
    {
      title: "One",
      value: "1",
    },
    {
      title: "Two",
      value: "2",
    },
    {
      title: "Three",
      value: "3",
    },
  ];

  const handleCustDates = (fromDate, toDate) => {
    const FD = moment(fromDate).format("dd-mm-yyyy");
    const TD = moment(toDate).format("dd-mm-yyyy");
    setOpen(false);
    alert(`from date:${FD} to date:${TD}`);
    // setDateFilter("Custom Date");
    // setFilters({ ...filters, fromDate: FD, toDate: TD });
    // const cf = { fromDate: FD, toDate: TD };
    // getDonationsListApi(0, size, { ...cf, ...getOtherFilters() });
  };

  const handleDialogClose = () => {
    // setFilters({ fromDate: "", toDate: "" });
    setOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmit = (e) => {
    handleModalClose();
  };

  const renderItemContent = () => {
    return (
      <div style={{ width: "100%" }}>
        {itemIndexValue === 0 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={0}>
              <Label title="Label" required />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={0}>
              <Label
                inputLabelStyles={classes.othersLabelStyles}
                title="Custom styled Label"
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={0}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Label from "../components/common/Label"
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {"<Label title='Label' required />"}
                        <br />
                        {
                          "<Label inputLabelStyles={classes.othersLabelStyles} title='Custom styled Label'/>"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the props value -
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>title</em> : pass the title value into this
                        variable.
                      </li>
                      <li>
                        optional props:
                        <ul>
                          <li>
                            <em>inputLabelStyles</em> : custom style can be
                            passed into this variable.
                          </li>
                          <li>
                            <em>required/required={"{true}"}</em> : can be added
                            in the label component in order to make it
                            mandatory. (E.g. Label*)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 1 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={1}>
              <Textarea
                label="Textarea"
                name="dataInput"
                rows={1}
                size="small"
                required={true}
                variant="standard"
                placeholder="Enter data"
                value={inputData}
                defaultValue="I'm a textfield."
                onChange={(e: any) => {
                  e.cursor = e.target.selectionStart;
                  setInputData(e.target.value);
                }}
                type="text"
                key="Input_Sample"
                autoFocus
              />
              {inputData}
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={1}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Textarea from
                        "../components/common/controls/Textarea";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          '<Textarea label="Input Field" name="dataInput" rows={1} size="small"'
                        }
                        {/* <br /> */}
                        {
                          ' required={true} variant="standard" placeholder="Enter data" value={inputData}'
                        }
                        {/* <br /> */}
                        {
                          ' onChange={(e: any) => setInputData(e.target.value)} type="text" />'
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the props value -
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>type</em> : type of input field(text/number),
                      </li>
                      <li>
                        <em>variant</em> : variant of input field,
                      </li>
                      <li>
                        <em>size</em> : size of the field (small/medium),
                      </li>
                      <li>
                        <em>rows</em> : number of rows (size) assigned for the
                        input field
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 2 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={2}>
              <Button text="Small" size="small" />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={2}>
              <Button text="Medium" size="medium" />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={2}>
              <Button
                text="Large Outlined variant"
                size="large"
                variant="outlined"
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={2}>
              <Button variant="text" color="primary" text="Text Button" />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={2}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Button from
                        "../components/common/controls/Button";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>{"<Button text='Small' size='small' />"}</em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the props value -
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>text</em> : title of the button,
                      </li>
                      <li>
                        optional props:
                        <ul>
                          <li>
                            <em>size</em> : size of the button; standard size is
                            large (E.g. Text Button)
                          </li>
                          <li>
                            <em>variant</em> : variant of the button
                            (outlined/text); standard is contained
                          </li>
                          <li>
                            <em>color</em> : color of text in the button
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 3 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={3}>
              <BasicTiles data={tileData} />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={3}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import BasicTiles from "../components/common/basicTiles"
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>{"<BasicTiles data={tileData} />"}</em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass an array object into data variable. Object should
                    contain title and value.
                    <br />
                    Ex. -
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "const tileData = { value: 10, title: 'Tile Example' };"
                        }
                      </em>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 4 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={4}>
              <RadioSingle label="Above 18" view="circle" checked />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={4}>
              <RadioSingle label="Above 18" color="error" />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={4}>
              <RadioSingle label="Above 18" color="primary" checked />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={4}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <ul style={{ fontWeight: "normal" }}>
                    This Radio component is only for representation, and isn't
                    interactive to the user. This can be set as
                    checked/unchecked based on the value from API.
                  </ul>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import RadioSingle from
                        "../components/common/controls/RadioSingle";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<RadioSingle label='Above 18' view='circle' checked={true} />"
                        }
                      </em>
                      <br />
                      <em>{"<RadioSingle label='Above 18' />"}</em>
                      <br />
                      {
                        "<RadioSingle label='Above 18' color='primary' checked />"
                      }
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the props value-
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>label</em> : label of the radio button,
                      </li>
                      <li>
                        optional props:
                        <ul>
                          <li>
                            <em>checked/checked={"{true}"}</em> : true/false
                          </li>
                          <li>
                            <em>view</em> : circle (default is square)
                          </li>
                          <li>
                            <em>color</em> : primary/secondary
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}

        {itemIndexValue === 5 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={5}>
              <RadioGroupList
                required={true}
                value={genderValue}
                label={"GENDER"}
                name="gender"
                list={GENDER}
                handleChange={(e) => setGenderValue(e.target.value)}
                row={false}
              />
            </ListItemPanel>
            <br />
            <ListItemPanel tabIndexValue={itemIndexValue} index={5}>
              <div>selected option: {genderValue}</div>
            </ListItemPanel>
            <br />
            <ListItemPanel tabIndexValue={itemIndexValue} index={5}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import RadioGroupList from
                        "../components/common/controls/RadioGroupList";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<RadioGroupList required={true} value={genderValue} label={'GENDER'} name='gender' list={GENDER}  handleChange={(e) => setGenderValue(e.target.value)} row={false}/>"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the radio item list into list variable. Structure of
                    the list object is as below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "const GENDER = [{key: 'MALE', label: 'Male', enabled: true, parentKey: null}, { key: 'FEMALE', label: 'Female',enabled: true,parentKey: null}];"
                        }
                        <br />
                      </em>
                      <br />
                      <li>
                        <em>label</em> : title of the radio group,
                      </li>
                      <li>
                        <em>value</em> : state needs to be passed in this
                        variable for the selected radio option value in order to
                        pass it to an API.
                      </li>
                      <li>
                        <em>handleChange</em> : to change the state value
                      </li>
                      <li>
                        <em>list</em> : contains the radio menu list
                      </li>
                      <li>
                        optional props:
                        <ul>
                          <li>
                            <em>required</em> : pass as true/false to make the
                            field mandatory
                          </li>
                          <li>
                            <em>row</em> : pass as false in order to display
                            options in differeent rows
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 6 && (
          <>
            {" "}
            <ListItemPanel tabIndexValue={itemIndexValue} index={6}>
              <Button
                text="Start Loader"
                size="medium"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 5000);
                }}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={6}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import LoadSpinner from
                        "../components/common/LoadSpinner";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>{"<LoadSpinner isLoading={isLoading} />"}</em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the boolean state value to variable IsLoading.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        If state variable is true loader start running then once
                        it set to false it will stop.
                      </li>
                      <li>
                        Load spinner can be used between API call or component
                        loading.
                      </li>
                      <li>
                        While initiating API call, the state can be set to true,
                        and later to false once data is fetched succesfully.
                      </li>
                      <li>
                        In the above representation when <em>Start Loader</em>{" "}
                        button is clicked, the state is set to true for 5 sec to
                        loading the spinner. After 5 sec, it'll retain the false
                        state dismissing the load spinner.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={6}>
              <LoadSpinner isLoading={isLoading} />
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 7 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={7}>
              <Button
                text="Select Date"
                size="medium"
                onClick={() => setOpen(true)}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={7}>
              <Container maxWidth="md">
                <CustomDate
                  open={open}
                  handleClose={handleDialogClose}
                  handleSubmit={handleCustDates}
                />
              </Container>
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={7}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import CustomDate from
                        "../components/common/customDate";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          " <CustomDate open={open} handleClose={handleDialogClose} handleSubmit={handleCustDates}/>"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the function and state value.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>open</em> : state to open and close the date
                        selector dialog.
                      </li>
                      <li>
                        <em>handleClose</em> : function to close the date
                        selector.
                        <br />
                        E.g.
                        <em>
                          {"const handleDialogClose = () => { setOpen(false)}"}
                        </em>
                      </li>
                      <li>
                        <em>handleSubmit</em> : function to submit the selected
                        date.
                        <br />
                        E.g.
                        <em>
                          {"  const handleCustDates = (fromDate, toDate) => {}"}
                        </em>
                      </li>
                      <li>
                        In the above representation when <em>Select Date</em>{" "}
                        button is clicked, the state is set to true opening the
                        date picker. Once Cancel/Submit is clicked, it'll call
                        respective the function.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 8 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={8}>
              <FileUpload
                id="abc"
                label={"Sample File"}
                placeholder={"upload"}
                required={true}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={8}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import FileUpload from
                        "../components/common/controls/FileUpload";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<FileUpload id='abc' label={'sample file'} placeholder={'upload'} required={true} />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        Below props value can be passed to the component:
                        <ul style={{ paddingLeft: "55px" }}>
                          {"name?: string;"}
                          <br />
                          {"label?: string;"}
                          <br />
                          {" size?: string;"}
                          <br />
                          {" id?: string;"}
                          <br />
                          {"required?: boolean;"}
                          <br />
                          {" value?: string;"}
                          <br />
                          {"disabled?: boolean;"}
                          <br />
                          {"placeholder?: string;"}
                          <br />
                          {" documentPath?: string;"}
                          <br />
                          {"data?: DataProps;"}
                          <br />
                          {
                            "onChange?: (event, data?: any, metaInfo?: any, isFirstTime?: string) => void;"
                          }
                          <br />
                          {"inputLabelStyles?: any;"}
                          <br />
                        </ul>
                        <br />
                        The structure of the DataProps looks like -<br />
                        {"{"}
                        <ul style={{ paddingLeft: "15px" }}>
                          {"metaInfo?: MetaInfo;"} <br />
                          {"name?: string;"} <br />
                          {" id?: string;"} <br />
                        </ul>
                        {"}"}
                        <br />
                        <br />
                        These details can be used to set and pass the properties
                        of the document.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}

        {itemIndexValue === 9 && (
          <>
            {" "}
            <ListItemPanel
              tabIndexValue={itemIndexValue}
              index={8}
            ></ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={9}>
              <Toggle
                checked={togleEnable}
                label={togleEnable ? "ON" : "OFF"}
                onChange={() => setTogleEnable(!togleEnable)}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={9}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Toggle from
                        "../components/common/controls/Toggle";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<Toggle checked={togleEnable} label={togleEnable ? 'ON' : 'OFF'} onChange={() => setTogleEnable(!togleEnable)} />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        Below values can be passed to the component, and used
                        accordingly.
                        <ul
                          style={{ fontWeight: "normal", paddingLeft: "55px" }}
                        >
                          <li>{"checked: boolean;"} boolean state variable.</li>
                          <li>
                            {"onChange: (e) => void;"} to change state of the
                            checked variable.
                          </li>
                          <li>{"name?: string;"}</li>
                          <li>{"label?: string;"}</li>
                          <li>
                            {"labelStyle?: string;"} css className to style the
                            label can be passed.
                          </li>
                          <li>
                            {" disabled?: boolean;"} can be passed to disable
                            toggle.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 10 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={10}>
              <Button
                text="Open Modal"
                size="medium"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={10}>
              <Modal
                isOpen={isModalOpen}
                text="Bank details of an active fundraiser cannot be changed. You can disable the current fundraiser and create new. Are you sure you want to recreate the fundraiser?"
                handleSubmit={handleModalSubmit}
                callBackModal={handleModalClose}
                labelBtn={"Confirm"}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={10}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Modal from "../components/common/Modal";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<Modal isOpen={isModalOpen} text='dummy text' handleSubmit={handleModalSubmit} callBackModal={handleModalClose} labelBtn={'Confirm'} />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        isOpen - state variable used to control the popup open
                        and close.
                      </li>
                      <li>text - the text you want inside the popup modal.</li>
                      <li>
                        handleSubmit - pass the submit function to the handle
                        submit.
                      </li>
                      <li>
                        callBackModal - pass the handle close function to update
                        isOpen state to false to close the modal.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 11 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={11}>
              <Select
                label="Dropdown options to be select from"
                options={selectData}
                variant="filled"
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={11}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Select from "../components/common/Select";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<Select label='Dropdown' options={selectData} variant='filled' />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        Structure of the list object is as below:
                        <br />
                        <em>
                          {
                            "const selectData = [{title: 'One',value: '1'}, {title: 'Two',value: '2'}, {title: 'Three',value: '3'},]"
                          }
                        </em>
                      </li>
                      <li>
                        <em>options </em>: a list object like selectData is to
                        be passed to options to be chosen from.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 12 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={12}>
              <SelectBox
                label="Dropdown"
                options={selectData}
                variant="filled"
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={12}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import SelectBox from "../components/common/SelectBox";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<SelectBox label='Dropdown' options={selectData} variant='filled' />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        Structure of the list object is as below:
                        <br />
                        <em>
                          {
                            "const selectData = [{title: 'One',value: '1'}, {title: 'Two',value: '2'}, {title: 'Three',value: '3'},]"
                          }
                        </em>
                      </li>
                      <li>
                        <em>options </em>: a list object like selectData is to
                        be passed to options to be chosen from.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 13 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={13}>
              <Checkbox
                label="Checkbox One"
                value="One"
                view="circle"
                checked
              />

              <Checkbox label="Checkbox Two" value="Two" />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={13}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <ul style={{ fontWeight: "normal" }}>
                    These checkboxes component are only for representation. It's
                    not interactive to the user.
                  </ul>
                  <li
                  //  style={{ fontWeight: "bold" }}
                  >
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import Checkbox from "../components/common/Checkbox";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<Checkbox label='Checkbox One' value='check' view='circle' />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>label</em> : pass the label of the checkbox.
                      </li>
                      <li>
                        <em>view </em>: circle can be passed as view. However,
                        defult is square.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
        {itemIndexValue === 14 && (
          <>
            <ListItemPanel tabIndexValue={itemIndexValue} index={14}>
              <CheckboxList
                list={checkList}
                onChange={(e, list) => setCheckList(list)}
              />
            </ListItemPanel>
            <ListItemPanel tabIndexValue={itemIndexValue} index={14}>
              <div>
                <ol style={{ fontWeight: "bold" }}>
                  <li>
                    First import the component by placing below line into your
                    file.
                    <br />
                    <ul>
                      <em style={{ fontWeight: "normal" }}>
                        import CheckboxList from
                        "../components/common/CheckboxList";
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Then use the component like below:
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <em>
                        {
                          "<CheckboxList  list={checkboxListData} onChange={(e) => setCheckList(e.target.value)} />"
                        }
                      </em>
                    </ul>
                  </li>
                  <br />
                  <li>
                    Pass the value to the component like above.
                    <br />
                    <ul style={{ fontWeight: "normal" }}>
                      <li>
                        <em>checkboxListData </em>: an array of data objects
                        with these four feilds:
                        <br />
                        <ul>
                          <li>title</li>
                          <li>value</li>
                          <li>icon</li>
                          <li>inActiveIcon</li>
                        </ul>
                        <br />
                        Ex: {" const checkboxListData = ["}
                        <br />
                        {
                          "{title: 'One', value: '1',icon: oneIcon,inActiveIcon: oneInActive},"
                        }
                        <br />
                        {
                          "{title: 'Two',value: '2',icon: twoIcon,inActiveIcon: twoInActive},"
                        }
                        <br />
                        {
                          "{title: 'Three',value: '3',icon: threeIcon,inActiveIcon: threeInActive},"
                        }
                        <br />
                        {"]"}
                      </li>
                      <li>
                        <em>onChange</em> : to change state of the checked
                        variable.{" "}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </ListItemPanel>
          </>
        )}
      </div>
    );
  };

  const renderMenuList = () => {
    return (
      <ul>
        {ItemList.map((list, i) => {
          const { name } = list;
          return (
            <li
              className="menu-list-item"
              key={i}
              // key={`subtab-${columnOnevalue}${i}`}
              // className={`sub-list-item ${
              //   // columnTwovalue === i ? "active" : ""
              // }`}
            >
              <MyButton data-tab={i} onClick={handleItemClick}>
                {/* <span
                  className={`menu-icon ${iconClass}`}
                  data-tab={tabIndex}
                  aria-hidden="true"
                  onClick={handleSubIconclick}
                >
                  <Tooltip title={name} placement="right">
                    <Icon data-tab={tabIndex} />
                  </Tooltip>
                </span> */}

                <span className="menu-label" data-tab={i}>
                  {name}
                  {/* {" "}{Icon} */}
                </span>
              </MyButton>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Grid container>
      {loading ? (
        <div className="account-screen" style={{ textAlign: "center" }}>
          {null}
        </div>
      ) : (
        <div
          id="account-screen"
          className="account-screen"
          style={{ width: "100%" }}
        >
          <div className={"content-menu"} id="content-menu">
            <div className="main-menu" id="main-menu">
              {/* <UserDetails /> */}
              {renderMenuList()}
            </div>
          </div>

          <div className="content-body" id="content-body">
            <Grid container>{renderItemContent()} </Grid>
          </div>
        </div>
      )}
    </Grid>
  );
};

export default Dashboard;
