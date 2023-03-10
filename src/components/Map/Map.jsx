import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getCurrentSessionId } from "../../api/authApi.ts"
const { kakao } = window

export default function Map() {
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

    useEffect(() => {
        const container = document.getElementById("myMap")
        const options = {
            center: new kakao.maps.LatLng(
                37.564986140049946,
                126.97848300166635
            ),
            level: 4
        }
        const map = new kakao.maps.Map(container, options)
        marker.setMap(map)

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude // 경도

                var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                    message = '<div style="padding:5px;">현재위치</div>' // 인포윈도우에 표시될 내용입니다

                // 마커와 인포윈도우를 표시합니다
                displayMarker(locPosition, message)
            })
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            var locPosition = new kakao.maps.LatLng(
                    37.564986140049946,
                    126.97848300166635
                ),
                message = "현위치를 알수 없어요.."

            displayMarker(locPosition, message)
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
            })

            var iwContent = message, // 인포윈도우에 표시할 내용
                iwRemoveable = false

            map.setCenter(locPosition)
        }
    }, [])

    //   marker.setMap(map);
    var markerPosition = new kakao.maps.LatLng()
    var marker = new kakao.maps.Marker({
        position: markerPosition
    })

    return <Wrapdiv id="myMap"></Wrapdiv>
}

const Wrapdiv = styled.div`
    width: 500px;
    height: 500px;
`
