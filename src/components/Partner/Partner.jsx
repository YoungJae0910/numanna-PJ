import React from "react"
import { useState } from "react"
import styled from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"

const Partner = () => {
    const [items, setItems] = useState(Array.from({ length: 40 }))

    const fetchData = () => {
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 50 })))
        }, 1500)
    }
    return (
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                // loader={<h4>Loading...</h4>}
            >
                <PartnerUl>
                    {items.map((i, index) => (
                        <PartnerLi key={index}>
                            <PartnerImg></PartnerImg>
                            <PartnerInfo>
                                <span>이름:</span>
                                <span>나이:</span>
                                <span>성별:</span>
                            </PartnerInfo>
                        </PartnerLi>
                    ))}
                </PartnerUl>
            </InfiniteScroll>
        </div>
    )
}

const PartnerUl = styled.ul`
    width: 90%;
    height: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`

const PartnerLi = styled.li`
    width: 70%;
    height: 100px;
    list-style: none;
    margin: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffe1e1;
    display: flex;
    justify-content: space-around;
`
export default Partner

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
