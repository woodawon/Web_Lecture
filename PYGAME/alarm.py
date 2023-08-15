import datetime

H, M = map(int, input().split())  # 숫자 여러 개 입력받아서 변수에 차례대로 넣기
time = datetime.datetime.now()
if (H >= 0 and H <= 23) and (M >= 0 and M <= 59):
    time.hour = H
    time.minute = M
    print(datetime.timedelta(minutes=45))
