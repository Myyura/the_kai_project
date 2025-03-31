---
sidebar_label: "2023年8月実施 プログラミング"
sidebar_position: 1
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
以下は Python プログラムに関する問題である。

--------------------

\[1\] 以下の各プログラムの出力結果 (output) を答えよ。

(1)
```text
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a + 2)
```

(2)
```text
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a.dot(b))
```

(3)
```text
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(a[1:, 1:])
```

(4)
```text
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
sum = np.sum(a, axis=0)
print(sum[1])
```

(5)
```text
import numpy as np

a = np.arange(6).reshape(2, 3)
print(a)
```

--------------------

\[2\] 以下の設問に答えよ。

(1) 下記のプログラムにおいて関数 (function) func() を実行した場合、なぜ a\[0\] の値は 3 になり、b の値は 3 にならないのか説明せよ。

```text
def func(m, n):
    m[0] = m[0] * 3
    n = n * 3

a = [1]
b = 1
func(a, b)
print("a =", a[0], " b =", b)
```

(2) 下記のプログラムを実行した場合、無限ループ (infinite loop) が発生して停止しないことがある。なぜ無限ループが発生するのか説明せよ。

```text
sum = 0.0
while True:
    if sum == 10:
        break
    else:
        sum = sum + 0.1
```

(3) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text
a = "Hello"
a[0] = 'h'
```

(4) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text
x = 10

def func():
    x += 1
    print(x)

func()
```

(5) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text
for i in range(10):
    print(i)
    i = "Hello"
```

--------------------

\[3\] 下記のブログラムは、与えられた数までのすべての素数 (prime number) をリストとして出力する。以下の設問に答えよ。

```text
def prime_numbers(n):
    primes = []
    for num in range(n, 1, -1):
        is_prime = True
        for i in range(2, num):
            if [ 空欄 a ]:
                is_prime = False
                break
        if [ 空欄 b ]:
            primes.append(num)
    return primes
```

(1) \[ 空欄 a \] と \[ 空欄 b \] に入る適切な式を答えよ。

(2) print(prime_numbers(20)) の出力結果を答えよ。

--------------------

\[4\] 下記のプログラムを読んで、以下の設問に答えよ。

```text
import numpy as np

def func(x, y, a, b):
    m, n = x.shape
    p, q = y.shape
    for i in range(m-p+1):
        for j in range(n-q+1):
            flag = True
            for k in range(p):
                for l in range(q):
                    if abs(x[i+k, j+l] - y[k, l]) > a:
                        flag = False
                        break
            if flag:
                x[i:i+p, j:j+q] = b
    return x

x1 = np.array([[1, 2, 3, 4, 5],
               [6, 7, 8, 9, 10],
               [1, 2, 3, 4, 5],
               [6, 7, 8, 9, 10],
               [1, 2, 3, 4, 5]])
y1 = np.array([[2, 3],
               [7, 8]])
y2 = np.array([[0, 0],
               [0, 0]])
print(func(x1, y1, 1, 0))
print(func(x1, y2, 0, 1))
```

(1) 27 行目まで実行したときの 27 行目の print 文の出力結果を答えよ。

(2) 28 行目まで実行したときの 28 行目の print 文の出力結果を答えよ。

(3) 8 行目から 14 行目を以下の 1 行の形で表したい。等価な処理となるよう空欄を埋めよ。

- if \[                  空欄                  \]

(4) グレースケール画像 (grayscale image) は一般に行列 (matrix) として表現できる。
関数 func() の第 1 引数に画像の行列を与えると、返り値 (return value) としてどのような画像が得られるか説明せよ。

## **Kai**
### \[1\]
#### (1)
```text
[3 4 5 6 7]
```

#### (2)
```text
32
```

#### (3)
```text
[[5 6]
 [8 9]]
```

#### (4)
```text
15
```

#### (5)
```text
[[0 1 2]
 [3 4 5]]
```

### \[2\]
#### (1)
Pythonでは、数値、文字列、タプルなどのオブジェクトが値渡し（関数に引数の値をコピーして渡す方法）の対象となりますので、関数内で b の値が変更されていても、関数の外側で定義された x の値は変わっていません。

#### (2)
10進数の「0.1」を2進数に変換すると「0.0001100110011…」となり、「0011」の部分が永遠に循環します。
このような値はどこかの桁数で丸めを行う必要があるため、誤差が生じます。

#### (3)
エラーが発生します。次のように変更すれば良いです。

```text
a = "Hello"
a = "h" + a[1:]
```

#### (4)
エラーが発生します。次のように変更すれば良いです。

```text
x = 10

def func():
    global x
    x += 1
    print(x)

func()
```

#### (5)
エラーが発生しません。出力は

```text
0
1
2
3
4
5
6
7
8
9
```

### \[3\]
#### (1)
- \[ 空欄 a \]: num % i == 0
- \[ 空欄 b \]: is_prime

#### (2)
```text
[19, 17, 13, 11, 7, 5, 3, 2]
```

### \[4\]
#### (1)
```text
[[ 0  0  0  0  5]
 [ 0  0  0  0 10]
 [ 0  0  0  0  5]
 [ 0  0  0  0 10]
 [ 1  2  3  4  5]]
```

#### (2)
```text
[[ 1  1  1  1  5]
 [ 1  1  1  1 10]
 [ 1  1  1  1  5]
 [ 1  1  1  1 10]
 [ 1  2  3  4  5]]
```

#### (3)
- if np.sum(np.abs(x[i:i+p, j:j+q] - y) > a) == 0:

#### (4)
（マスク？）