import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Center from '../components/Center';
import centerList from '../data/data.json';

declare global {
  interface Window {
    kakao: any;
  }
}
const MapContainer = styled.div`
  width: 400px;
  height: 300px;
`;
const HomeContainer = styled.div`
  top: 65px;
`;
const SectionContainer = styled.div`
  margin: 25px 15px 25px 30px;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 25px;
`;
const Map = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(centerList.slice(0, 5));

  const _infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = document.documentElement.clientHeight;

    if (Math.round(scrollTop + clientHeight) === scrollHeight) {
      setItemIndex(itemIndex + 5);
      console.log('ok');
      setResult(result.concat(centerList.slice(itemIndex + 5, itemIndex + 10)));
    }
  }, [itemIndex, result]);

  var map: any;
  var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  function displayMarker(place: any) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트를 등록합니다
    window.kakao.maps.event.addListener(marker, 'click', function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          '</div>',
      );
      infowindow.open(map, marker);
    });
  }
  return (
    <>
      <MapContainer id="map"></MapContainer>
      <HomeContainer>
        <SectionContainer>
          {result.map((center) => (
            <Center key={center.id} center={center} />
          ))}
        </SectionContainer>
      </HomeContainer>
    </>
  );
};
export default Map;
