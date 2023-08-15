import cv2  # OpenCV 라이브러리 import
import sys  # sys모듈 import
import mediapipe as mp  # MediaPipe 패키지 import

# MediaPipe 패키지에서 사용할 기능들 선언.
mp_drawing = mp.solutions.drawing_utils  # --> draw_landmarks() 함수 사용할 예정.
mp_drawing_style = (
    mp.solutions.drawing_styles
)  # --> get_default_hand_landmarks_style(), get_default_hand_connections_style() 함수 사용할 예정.
mp_hands = mp.solutions.hands  # 손 인식을 위한 객체 --> Hands() 클래스 사용할 예정.

# OpenCV 라이브러리 함수 사용
cap = cv2.VideoCapture(0)  # 비디오 캡처 객체 생성
if not cap.isOpened():  # 연결 확인
    print("카메라가 연결되지 않았습니다.")
    sys.exit(1)

hands = (
    mp_hands.Hands()
)  # 손 인식 객체 생성 : mp.solutions.hands => Hands() 클래스 --> mp_hands.Hands()

while True:
    res, frame = cap.read()  # 카메라 데이터 읽기
    if not res:
        print("카메라 오류")
        break

    frame = cv2.flip(frame, 1)  # 카메라 좌우 반전

    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)  # 미디어파이프에서 인식 가능한 색공간으로 변환
    # cvtColor() 함수 : 이미지와 색 공간 정보를 받아 변경해줌.
    # OpenCV는 이미지를 BGR 순서로 읽음 But Mediapipe는 RGB 순서로 이미지를 읽을 수 있어서 알맞게 변경해주는 거임.

    results = hands.process(image)  # image에서 hands를 찾은 뒤 결과를 반환함.
    if results.multi_hand_landmarks:  # 손이 인식되었는지 확인.
        # mulit_hand_landmarks => mp_hands의 Hand() 클래스 안의 super()__init__() 안의 outputs[] 안에 들어있는 요소.
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(  # mp_drawing의 draw_landmarks() 함수
                frame,  # image
                hand_landmarks,  # landmark_list
                mp_hands.HAND_COMMECTIONS,  # connections
                mp_drawing_style.get_default_hand_landmarks_style(),  # landmark_drawing_spec
                mp_drawing_style.get_default_hand_connections_style(),  # connection_drawing_spec
            )

    cv2.imshow("mediapipe hands", frame)  # 영상을 화면에 출력.
    key = cv2.waitKey(5) & 0xFF  # 키보드 값 받기
    if key == 27:  # esc 눌렀을 때
        break

cv2.destroyAllWindows()  # 영상 닫기
cap.release()  # 비디오 객체 연결 해제
