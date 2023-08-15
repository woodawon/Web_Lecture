import cv2  # OpenCV 라이브러리 import
import sys  # sys 모듈 import

cap = cv2.VideoCapture(0)  # 비디오 캡처 객체 생성

if not cap.isOpened():  # 연결 확인 - 비디오 캡처 객체가 연결되지 않았다면?
    print("Camera is not opened")
    sys.exit(1)  # 프로그램 종료 - exit 을 True(1)로 하여 system 종료하기.

while True:  # 무한 반복
    # res => 카메라 데이터를 읽었는지의 True, False 여부.
    # frame => 프레임 데이터가 담기는 변수명.
    res, frame = cap.read()  # 카메라 데이터 읽기

    if not res:  # 프레임 읽었는지 확인
        print("Camera error")
        break  # 반복문 종료

    # "frame" - key / frame - value
    cv2.imshow("chicken", frame)  # 영상 출력

    # & 0xFF 의미 => os 64bit 체제라면 추가해줘야 하고 32bit면 안 해도 됨.
    key = cv2.waitKey(1) & 0xFF  # 키보드 입력받기
    if key == 27:  # ESC를 눌렀을 경우
        break  # 반복문 종료

cv2.destroyAllWindows()  # 영상 창 닫기
cap.release()  # 비디오 캡처 객체 해제
