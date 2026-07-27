---
sidebar_label: "2010年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Z-Transform-Time-Shift
  - Electrical-Electronic.Signal-Processing.Convolution-Theorem
  - Electrical-Electronic.Signal-Processing.Discrete-Time-Transfer-Function-and-Impulse-Response
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2010年8月実施 専門 第5問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
離散信号処理に関する以下の問いに答えよ。なお, 離散信号 $x(n)$ は $n < 0$ でゼロであるとする。

(1) 離散信号 $x(n)$ を $m$ だけシフトさせ $x(n-m)$ としたとき, この信号の $z$ 変換が $z^{-m}X(z)$ となることを示せ。なお, $X(z)$ は $x(n)$ の $z$ 変換である。

(2) $2$ つの離散信号 $x_1(n)$ と $x_2(n)$ のたたみ込み $x_1(n)*x_2(n)$ の定義を示せ。

(3) $x_1(n)$ と $x_2(n)$ の $z$ 変換がそれぞれ $X_1(z)$ と $X_2(z)$ であるとする。(1) と (2) の結果を用いて, $x_1(n)*x_2(n)$ の $z$ 変換が $X_1(z)X_2(z)$ となることを示せ。

(4) 下図に示す離散時間システムの伝達関数 $H(z)$ を求めよ。

(5) 離散時間システムインパルス応答の変換は伝達関数と等しくなる。これを用いて, 下図の離散時間システムインパルス応答 $h(n)$ を求めた上で、離散信号 $x(n)$ を入力したときの応答 $y(n)$ を求めよ。


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2011_5_p1.png" width="591" height="307" alt=""/>
</figure>


### 题目描述

回答下列离散信号处理问题。约定离散信号 $x(n)$ 在 $n<0$ 时为零。

(1) 将 $x(n)$ 平移 $m$ 得到 $x(n-m)$。证明其 $z$ 变换为 $z^{-m}X(z)$，其中 $X(z)$ 是 $x(n)$ 的 $z$ 变换。

(2) 写出两个离散信号 $x_1(n)$ 与 $x_2(n)$ 的卷积 $x_1(n)*x_2(n)$ 的定义。

(3) 设 $x_1(n)$、$x_2(n)$ 的 $z$ 变换分别为 $X_1(z)$、$X_2(z)$。利用 (1)、(2) 的结果，证明 $x_1(n)*x_2(n)$ 的 $z$ 变换为 $X_1(z)X_2(z)$。

(4) 求上图所示离散时间系统的传递函数 $H(z)$。

(5) 离散时间系统的冲激响应之 $z$ 变换等于其传递函数。利用这一事实，先求上图系统的冲激响应 $h(n)$，再求输入离散信号 $x(n)$ 时的输出响应 $y(n)$。

#### 考点

- $z$ 变换的时移性质：从单边离散信号的定义出发证明时移对应乘以 $z^{-m}$。
- 卷积定理：写出离散卷积并证明时域卷积在 $z$ 域中对应乘积。
- 传递函数与冲激响应：根据图示反馈系统建立 $z$ 域关系，并由 $H(z)$ 求 $h(n)$ 及任意输入响应。

## **Kai**
### (1)

$$
\begin{aligned}
X(z) &= \sum_{n=0}^{+\infty}x(n-m)z^{-m} \\
&= \sum_{l=-m}^{+\infty}x(l)z^{-l-m} \\
&= z^{-m}\sum_{l=-m}^{+\infty}x(l)z^{-l} \\
&= z^{-m}x(z)
\end{aligned}
$$

### (2)
$x_1(n)*x_2(n) = \sum_{m=0}^{+\infty}x_1(n-m)x_2(m)$

### (3)

$$
\begin{aligned}
FT \bigg(x_1(n)*x_2(n)\bigg) &= \sum_{n=0}^{+\infty}\sum_{m=0}^{+\infty}x_1(n-m)x_2(m)z^{-n} \\
&= \sum_{m=0}^{+\infty}\sum_{n=0}^{+\infty}X_1(n-m)X_2(m)z^{-n} \\
&= \sum_{m=0}^{+\infty}X_2(m)\sum_{n=0}^{+\infty}X_1(n-m)z^{-(n-m)}\cdot z^{-m} \\
&= \sum_{m=0}^{+\infty}X_2(m)z^{-m}\sum_{n=0}^{+\infty}X_1(n-m)z^{-(n-m)} \\
&= X_1(z)X_2(z)
\end{aligned}
$$

### (4)

$$
\begin{aligned}
&b[x(z) + az^{-1}y(z)] = y(z) \\
&bx(z) = (1 - abz^{-1})y(z) \\
&H(z) = \frac{y(z)}{x(z)} = \frac{b}{1-abz^{-1}}
\end{aligned}
$$

### (5)

$$
\begin{aligned}
h(n) &= b \cdot (ab)^n = a^n b^{n+1} \\
y(n) &= x(n) * h(n) \\
&= \sum_{k=0}^{+\infty}x(n-k)a^kb^{k+1}
\end{aligned}
$$
