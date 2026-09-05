---
sidebar_label: "2023年8月実施 プログラミング"
tags:
  - Nagoya-University
  - Computer-Science.Programming.NumPy-Array-Operations
  - Computer-Science.Programming.Python-Object-Mutability
  - Computer-Science.Computer-Architecture.Floating-Point-Representation
  - Computer-Science.Programming.Variable-Scope
  - Computer-Science.Programming.Prime-Enumeration
  - Computer-Science.Programming.Sliding-Window-Pattern-Matching
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/17b639d81a91ac5dca245f353c6a2378.pdf)
以下は Python プログラムに関する問題である。

--------------------

\[1\] 以下の各プログラムの出力結果 (output) を答えよ。

(1)
```text showLineNumbers
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a + 2)
```

(2)
```text showLineNumbers
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a.dot(b))
```

(3)
```text showLineNumbers
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(a[1:, 1:])
```

(4)
```text showLineNumbers
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
sum = np.sum(a, axis=0)
print(sum[1])
```

(5)
```text showLineNumbers
import numpy as np

a = np.arange(6).reshape(2, 3)
print(a)
```

--------------------

\[2\] 以下の設問に答えよ。

(1) 下記のプログラムにおいて関数 (function) func() を実行した場合、なぜ a\[0\] の値は 3 になり、b の値は 3 にならないのか説明せよ。

```text showLineNumbers
def func(m, n):
    m[0] = m[0] * 3
    n = n * 3

a = [1]
b = 1
func(a, b)
print("a =", a[0], " b =", b)
```

(2) 下記のプログラムを実行した場合、無限ループ (infinite loop) が発生して停止しないことがある。なぜ無限ループが発生するのか説明せよ。

```text showLineNumbers
sum = 0.0
while True:
    if sum == 10:
        break
    else:
        sum = sum + 0.1
```

(3) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text showLineNumbers
a = "Hello"
a[0] = 'h'
```

(4) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text showLineNumbers
x = 10

def func():
    x += 1
    print(x)

func()
```

(5) 下記のプログラムを実行した場合、エラーが発生するか否か答えよ。
また、エラーが発生しない場合はその理由を、エラーが発生する場合はその解決策を答えよ.

```text showLineNumbers
for i in range(10):
    print(i)
    i = "Hello"
```

--------------------

\[3\] 下記のプログラムは、与えられた数までのすべての素数 (prime number) をリストとして出力する。以下の設問に答えよ。

```text showLineNumbers
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

```text showLineNumbers
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

```text
if [ 空欄 ]:
```

(4) グレースケール画像 (grayscale image) は一般に行列 (matrix) として表現できる。
関数 func() の第 1 引数に画像の行列を与えると、返り値 (return value) としてどのような画像が得られるか説明せよ。

### 题目描述

本题考查上文给出的 Python/NumPy 程序。

**[1] NumPy 基础**：逐一写出五段程序的输出，内容依次涉及数组加标量、向量点积、二维切片、按列求和后取元素，以及 `arange(6).reshape(2,3)`。

**[2] Python 语义与错误分析**：

1. 解释把列表 `a` 和整数 `b` 传给 `func(m,n)` 后，为何修改 `m[0]` 会使 `a[0]` 变为 3，而对局部变量 `n` 重新赋值不会使 `b` 变为 3。
2. 解释浮点数从 0 开始反复加 `0.1`、以 `sum == 10` 为退出条件时为何可能形成无限循环。
3. 判断 `a="Hello"; a[0]='h'` 是否报错；若报错给出解决方法。
4. 判断函数内执行 `x += 1` 时是否报错；若报错说明作用域原因和解决方法。
5. 判断 `for i in range(10)` 循环体内把 `i` 赋成字符串是否报错，并说明。

**[3] 素数枚举**：补全 `prime_numbers(n)` 中判断整除与追加元素的空格 a、b，并写出 `prime_numbers(20)` 的输出。

**[4] 滑动窗口矩阵匹配**：完整 `func(x,y,a,b)`、数组 `x1,y1,y2` 见上文。写出第 27、28 行两个 `print` 的矩阵输出；把第 8—14 行的逐元素误差判断改写为一行等价 `if` 条件；并解释当第一个参数是灰度图矩阵时，函数返回的图像发生什么变化。

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
`m` は `a` と同じ可変なリストを参照するので、`m[0]` の変更は `a[0]` に反映される。一方、`n = n * 3` は局所変数 `n` を別の整数に束縛し直すだけなので、`b` は変化しない。

#### (2)
10進数の「0.1」を2進数に変換すると「0.0001100110011…」となり、「0011」の部分が永遠に循環します。
このような値は有限桁に丸められるため、誤差が生じる。通常の倍精度浮動小数点では、100 回加算した値は `9.99999999999998` となり、次の加算では 10 を超える。その後も値は減少せず、`sum == 10` が成立しないため停止しない。

#### (3)
文字列は変更できないため、要素への代入は `TypeError` となる。新しい文字列を作り、`a` に代入すればよい。

```text
a = "Hello"
a = "h" + a[1:]
```

#### (4)
`x += 1` があるため `x` は関数内の局所変数と解釈されるが、代入前にその値を読むので `UnboundLocalError` となる。大域変数を更新するなら `global x` を宣言する。

```text
x = 10

def func():
    global x
    x += 1
    print(x)

func()
```

#### (5)
エラーは発生しない。各反復の先頭で `range(10)` の次の整数が `i` に代入されるため、反復内で文字列を代入しても次の反復には影響しない。出力は

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
```python
if np.sum(np.abs(x[i:i+p, j:j+q] - y) > a) == 0:
```

#### (4)
関数 `func()` は，画像中からテンプレート `y` と近似的に一致する部分を探索し，その部分の画素値を `b` に置き換える。各対応画素の差の絶対値がすべて `a` 以下であれば一致と判定する。走査は上の行から順に、各行では左から右へ進み、一致した窓はその場で書き換えられる。この変更は入力配列 `x` 自体に反映され、後続の窓の判定にも影響する。
