import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
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

    let ps = new window.kakao.maps.services.Places();

    ps.keywordSearch('삼성 서비스 센터', placesSearchCB);
  }, []);
  function placesSearchCB(data: any[], status: number, pagination: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      var bounds = new window.kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      }

      map.setBounds(bounds);
    }
  }
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
    <div
      id="map"
      style={{
        width: '400px',
        height: '300px',
      }}
    ></div>
  );
};
export default Map;
