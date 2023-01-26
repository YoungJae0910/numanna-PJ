import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"
import { getUsers } from "../../api/authApi.ts"

const Partner = () => {
    const [items, setItems] = useState(Array.from({ length: 7 }))
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const data = await getUsers()
        setUsers(data)
        console.log(data)

        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 7 })))
        }, 1500)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
            >
                <PartnerUl>
                    {users.map((user, index) => (
                        <PartnerLi key={index}>
                            <PartnerImg></PartnerImg>
                            <PartnerInfo>
                                <span>이름:{user.nickName}</span>
                                <span>나이:{user.age}</span>
                                <span>성별:{user.sex}</span>
                            </PartnerInfo>
                        </PartnerLi>
                    ))}
                </PartnerUl>
            </InfiniteScroll>
        </div>
    )
}

export default Partner

const PartnerUl = styled.ul`
    width: 90%;
    height: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PartnerLi = styled.li`
    width: 70%;
    height: 100px;
    list-style: none;
    margin: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #ffe1e1;
    display: flex;
    justify-content: space-around;
`

const PartnerImg = styled.div`
    width: 40%;
    height: 80px;
    background-color: #f9f2f2;
    border-radius: 50%;
`

const PartnerInfo = styled.div`
    width: 40%;
    height: 80px;
    background-color: #ffe1e1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`
