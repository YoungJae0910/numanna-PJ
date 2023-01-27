import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"
import { getUsers } from "../../api/authApi.ts"
import Header from "../../page/Header"

const Partner = () => {
    const [items, setItems] = useState(Array.from({ length: 7 }))
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const data = await getUsers()
        setUsers(data)

        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 7 })))
        }, 1500)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Header />

            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
            >
                <StUlBox>
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
                </StUlBox>
            </InfiniteScroll>
        </>
    )
}

const StUlBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const PartnerUl = styled.ul`
    max-width: 100%;
    height: 90%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    /* overflow: scroll; */
`

const PartnerLi = styled.li`
    width: 90%;
    height: 110px;
    list-style: none;
    margin: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffe1e1;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
`

const PartnerImg = styled.div`
    width: 80px;
    height: 80px;
    background-color: #f9f2f2;
    border-radius: 50%;
`

const PartnerInfo = styled.div`
    width: 60%;
    height: 80px;
    /* background-color: #b04f4f; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px;
    /* padding: 10px; */
`

export default Partner
