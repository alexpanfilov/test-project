import React, {useState} from 'react'

export default function UserBox (props) {

    const [id, setId] = useState('')

    const styleContainer = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #f1f1f1"
    }

    const styleBox = {
        width: 100,
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid white"
    };

    const activeToggle = (id) => {
        setId(id)
    }

    return (
        <div style={styleContainer}>
            {
                props.users.map(u => {
                        return (
                            <div style={{...styleBox, background: id === u.email ? "#efefef" : "#fff"}}
                                 onClick={() => activeToggle(u.email)}
                                 key={u.email}>
                                {u.name.first}
                                <img src={u.picture.thumbnail} alt={`${u.name.first} ${u.name.last}`}/>
                            </div>
                        )
                    }
                )
            }

        </div>
    )
}