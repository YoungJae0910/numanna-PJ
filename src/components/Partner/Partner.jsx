import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"
import { getUsers, getCurrentSessionId, getUser } from "../../api/authApi.ts"
import Header from "../../page/Header"
import { getScoreDiffInfoBetweenTwoUsers } from "../../matching/matching.ts"
import { useNavigate } from "react-router-dom"

const Partner = () => {
    const navigate = useNavigate()
    const onRestrictedPageLoad = async () => {
        const user = await getCurrentSessionId()
        if (user === "") {
            navigate("/")
        }
    }
    useEffect(() => {
        onRestrictedPageLoad()
    }, [])

    const [items, setItems] = useState(Array.from({ length: 7 }))
    const [users, setUsers] = useState([])
    const [self, setSelf] = useState({})
    const [selfLoaded, setSelfLoaded] = useState(false)

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

    const fetchSelf = async () => {
        const res = await getUser(await getCurrentSessionId())
        setSelf(res)
        setSelfLoaded(true)
    }

    useEffect(() => {
        fetchSelf()
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
                    {users.length > 0 && selfLoaded && (
                        <PartnerUl>
                            {users.map((user, index) => (
                                <PartnerLi key={index}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <PartnerImg></PartnerImg>
                                        <PartnerChatButton
                                            onClick={() => {
                                                navigate("/matching/" + user.id)
                                            }}
                                        >
                                            채팅하기
                                        </PartnerChatButton>
                                    </div>
                                    <PartnerInfo>
                                        <span>이름:{user.nickName}</span>
                                        <span>나이:{user.age}</span>
                                        <span>성별:{user.sex}</span>
                                        <span>
                                            {getScoreDiffInfoBetweenTwoUsers(
                                                self,
                                                user
                                            )}
                                        </span>
                                    </PartnerInfo>
                                </PartnerLi>
                            ))}
                        </PartnerUl>
                    )}
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
    max-width: 60%;
    min-width: 350px;
    height: 90%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    place-items: center;
    grid-gap: 10;
    align-items: center;
    /* overflow: scroll; */
`

const PartnerLi = styled.li`
    width: 90%;
    height: 200px;
    list-style: none;
    margin: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffe1e1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
    /* cursor: pointer; */

    &:hover {
        transform: scale(1.05);
        transition: 0.7s;
    }
`

const PartnerImg = styled.div`
    width: 100px;
    height: 100px;
    background-color: #f9f2f2;
    border-radius: 50%;
`

const PartnerChatButton = styled.button`
    background-color: transparent;
    border: 2px solid #f25a5a;
    color: #f25a5a;
    transition: linear 0.2s;

    :hover {
        background-color: #f25a5a;
        color: white;
    }

    padding: 5px 10px;
    border-radius: 5px;

    cursor: pointer;

    margin-top: 10%;
`

const PartnerInfo = styled.div`
    width: 60%;
    height: 100px;
    /* background-color: #b04f4f; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    margin: 10px;
    /* padding: 10px; */
`

export default Partner
