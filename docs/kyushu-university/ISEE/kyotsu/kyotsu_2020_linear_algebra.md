---
sidebar_label: "2020年度 線形代数"
sidebar_position: 16
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年度 線形代数

## **Author**
Yu

## **Description**
数列 $a_0，a_1，a_2, \cdots$ は, $a_0 = 3，a_1 = 1，a_2 = 3$ および

$$
a_n = a_{n−1} + a_{n−2} + 2a_{n−3} \quad \quad (n = 3，4，5，\cdots)
$$

で定義される．

(1) $a_3，a_4，a_5$ を求めよ．

(2) 各 $n = 0，1，2，\cdots$ について次が成立つような行列 $T$ を答えよ．

$$
\begin{pmatrix}
a_{n+1}\\
a_{n+2}\\
a_{n+3}\\
\end{pmatrix} = T
\begin{pmatrix}
a_n\\
a_{n+1}\\
a_{n+2}\\
\end{pmatrix}
$$

(3) $T$ のすべての固有値とそれぞれに対応する固有ベクトルを求めよ．

(4) ベクトル $\begin{pmatrix} 3 \\1 \\3 \end{pmatrix}$を，前問で求めた固有ベクトルの線形結合として表せ．

(5) $a_n$ を求めよ．

## **Kai**
### (1)

$$
\begin{aligned}
a_3 &= a_2 + a_1 + 2a_0 = 3 + 1 + 2 \times 3 = 10\\
a_4 &= a_3 + a_2 + 2a_1 = 10 + 3 + 2 \times 1 = 15\\
a_5 &= a_4 + a_3 + 2a_2 = 15 + 10 + 2 \times 3 = 31 
\end{aligned}
$$

### (2)

$$
\begin{bmatrix}
a_{n + 1}\\
a_{n + 2}\\
a_{n + 3}\\
\end{bmatrix} = 
\begin{bmatrix}
a_{n + 1}\\
a_{n + 2}\\
a_{n + 2} + a_{n + 1} + 2a_{n}\\
\end{bmatrix} = T
\begin{bmatrix}
a_n\\
a_{n + 1}\\
a_{n + 2}\\
\end{bmatrix} \Rightarrow T = 
\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
2 & 1 & 1\\
\end{bmatrix}
$$

### (3)

$$
\begin{aligned}
&\because |A| = |\lambda E - T| = 
\begin{vmatrix}
\lambda & -1 & 0 \\
0 & \lambda & -1 \\
-2 & -1 & \lambda -1\\
\end{vmatrix} = (\lambda^2 + \lambda + 1)(\lambda - 2) = 0 \\
&\therefore \lambda_1 = 2 \quad \lambda_2 = \frac{-1 + \sqrt{3}i}{2} \quad \lambda_3 = \frac{-1 - \sqrt{3}i}{2}
\end{aligned}
$$

$\lambda_1 = 2$ のとき, $A_1x_1 = 0$ であり、$x_1 = \begin{bmatrix} \alpha_1\\ \alpha_2\\ \alpha_3\\ \end{bmatrix}$ とおくと,

$$
\begin{bmatrix}
2 & -1 & 0\\
0 & 2 & -1\\
-2 & -1 & 1\\
\end{bmatrix}
\begin{bmatrix}
\alpha_1\\
\alpha_2\\
\alpha_3\\
\end{bmatrix} = 0 \Rightarrow x_1 = 
\begin{bmatrix}
1 \\
2 \\
4 \\
\end{bmatrix}
$$

$\lambda_2 = \frac{-1 + \sqrt{3}i}{2}$ のとき, $A_2x_2 = 0$ であり、$x_2 = \begin{bmatrix} \beta_1\\ \beta_2\\ \beta_3\\ \end{bmatrix}$ とおくと,

$$
\begin{bmatrix}
\frac{-1 + \sqrt{3}i}{2} & -1 & 0 \\
0 & \frac{-1 + \sqrt{3}i}{2} & -1 \\
-2 & -1 & \frac{-3 + \sqrt{3}i}{2} \\
\end{bmatrix}
\begin{bmatrix}
\beta_1\\
\beta_2\\
\beta_3\\
\end{bmatrix} = 0 \Rightarrow x_2 =
\begin{bmatrix}
1 \\
\frac{-1 + \sqrt{3}i}{2} \\
\frac{-1 - \sqrt{3}i}{2} \\
\end{bmatrix}
$$

$\lambda_3 = \frac{-1 - \sqrt{3}i}{2}$ のとき, $A_3x_3 = 0$ であり、$x_3 = \begin{bmatrix} \gamma_1\\ \gamma_2\\ \gamma_3\\ \end{bmatrix}$ とおくと,

$$
\begin{bmatrix}
\frac{-1 - \sqrt{3}i}{2} & -1 & 0\\
0 & \frac{-1 - \sqrt{3}i}{2} & -1\\
-2 & -1 & \frac{-3 - \sqrt{3}i}{2}\\
\end{bmatrix}
\begin{bmatrix}
\gamma_1\\
\gamma_2\\
\gamma_3\\
\end{bmatrix} = 0 \Rightarrow x_3 = 
\begin{bmatrix}
-1 \\
\frac{-1 + \sqrt{3}i}{2}\\
\frac{1 - \sqrt{3}i}{2}\\
\end{bmatrix}
$$

### (4)

$$
\begin{bmatrix}
3 \\
1 \\
3 \\
\end{bmatrix} = 
\begin{bmatrix}
1 \\
2 \\
4 \\
\end{bmatrix} + 
\begin{bmatrix}
1 \\
\frac{-1 + \sqrt{3}i}{2} \\
\frac{-1 - \sqrt{3}i}{2} \\
\end{bmatrix} -
\begin{bmatrix}
-1 \\
\frac{-1 + \sqrt{3}i}{2}\\
\frac{1 - \sqrt{3}i}{2}\\
\end{bmatrix}
$$

### (5)

$$
a_n = 2^n + 2\cos\big(\frac{2n\pi}{3}\big)
$$
