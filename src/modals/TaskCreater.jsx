import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TaskCreator = ({ modal, toggle, save }) => {
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));
    const classes = useStyles();
    const [taskname, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [selectDate, setSelectDate] = useState(
        new Date("2020-09-11T12:00:00")
    );

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "taskName") {
            setTaskName(value)
        } else if(name === "description") {
            setDescription(value)
           
        } else{
            setSelectDate(value)
        }
    }

    const saveTask = () => {
        let taskObj = {}
        taskObj["Name"] = taskname
        taskObj["Description"] = description
        taskObj["DateTime"] = selectDate
        save(taskObj)
        setDescription("")
        setTaskName("")
        setSelectDate("")
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Your Todo</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="" className="label">Task Name:</label>
                        <input type="text" className="form-control" value={taskname} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="label">Description:</label>
                        <textarea className="form-control" rows="5" value={description} onChange={handleChange} name="description"></textarea>
                    </div>


                </form>
                <form className={classes.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Date and Time for Todo"
                        type="datetime-local"
                        className={classes.textField}
                        value={selectDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className="createBtn" onClick={toggle} onClick={saveTask}>Create</Button>{' '}
                <Button className="cancelBtn" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskCreator;