import React from 'react'
import PersonelCard from './PersonelCard'
import './Style/PersonelListStyle.css'
const personels = [
    {
        name: "aladin",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        title: "titre",
        statue: "statue",
        role: "role"
    },
    {
        name: "aladin",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        title: "titre",
        statue: "statue",
        role: "role"
    },
    {
        name: "aladin",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        title: "titre",
        statue: "statue",
        role: "role"
    },
    {
        name: "aladin",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        title: "titre",
        statue: "statue",
        role: "role"
    },
]
const PersonelList = () => {
    return (
        <div>
            <dir className='board'>
                <table style={{ width: "100%" }} >
                    <thead>
                        <tr>
                        <td>Name</td>
                        <td>Title</td>
                        <td>Statue</td>
                        <td>Role</td>
                        <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                           personels.map((el)=><PersonelCard el={el}/>)
                        }

                    
                    </tbody>
                </table>
            </dir>

        </div>
    )
}

export default PersonelList
