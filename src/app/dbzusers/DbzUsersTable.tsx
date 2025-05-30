"use client";

import { Box, Typography, Modal, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const DbzUsersTable = ({ users }: any) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [deleteUserInfo, setDeleteUserInfo] = useState()
    const { push } = useRouter();

    const handleConfirmDeleteUser = (user: any) => {
        console.log(user)
        setDeleteUserInfo(user)
        setModalOpen(true)
    }

    const handleDeleteUser = async () => {

        console.log('handleDeleteUser')

        const resp = await fetch('http://localhost:3000/api/dbzusers', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleteUserInfo._id)
        });
        const json = await resp.json();
        const data = json;
        setModalOpen(false)
        push('/dbzusers')

    }

    return (
        <>
            <Box sx={{ bgcolor: "white", mt: 3 }}>
                <table style={{ border: "1px solid gray", width: "100%" }}>
                    <thead style={{ border: "1px solid gray" }}>
                        <tr>
                            <th>Name</th>
                            <th>Planet</th>
                            <th>Spouse</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users ?
                            <>
                                {
                                    users.map((u: any) => (
                                        <tr key={u._id} style={{ border: "1px solid gray" }}>
                                            <td style={{ border: "1px solid gray" }}>{u.name}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.planet}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.spouse}</td>
                                            <td
                                                style={{ border: "1px solid gray", textAlign: "center" }}
                                                onClick={() => handleConfirmDeleteUser(u)}
                                            >
                                                <span style={{ cursor: "pointer", color: "blue" }}>Delete</span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </>
                            :
                            <>
                                <Typography>
                                    Loading...
                                </Typography>
                            </>
                        }

                    </tbody>
                </table>
            </Box >

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm delete
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Do you want to delete this user?
                        {/* {deleteUserInfo} */}
                    </Typography>
                    <Box sx={{ m: "auto", display: "flex", justifyContent: "center", alignItems: "center", pt: 2 }}>
                        <Button variant="contained" sx={{ m: 2 }} onClick={() => handleDeleteUser()}>Yes</Button>
                        <Button sx={{ m: 2 }} onClick={() => setModalOpen(false)}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default DbzUsersTable