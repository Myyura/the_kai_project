---
sidebar_label: "2019年度 線形代数"
sidebar_position: 12
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 線形代数

## **Author**
Yu

## **Description**
行列 $A = \begin{pmatrix} -2 & -3 & -3 \\ 6 & 7 & 6 \\ -6 & -6 & -5 \end{pmatrix}$ について, 次の各問に答えよ。

(1) $Ax = -2x$ なる零でないベクトル $x = \begin{pmatrix} x_1\\x_2\\x_3 \end{pmatrix}$ を $1$ つ求めよ。

(2) $Ay = dy$ なる数 $d \neq -2$ と零でないベクトル $y = \begin{pmatrix} y_1\\y_2\\y_3 \end{pmatrix}$ を $1$ つ求めよ。

(3) $AP = PD$ を満たす正則行列 $P$ と対角行列 $D = \begin{pmatrix} d_1 & 0 & 0\\0 & d_2 & 0\\0 & 0 & x_3 \end{pmatrix}$ を $1$ つ求めよ。

(4) $P$ の逆行列 $P^{-1}$ を求めよ。

(5) $A^{10}$を求めよ。

## **Kai** 
### (1)

$$
Ax = -2x \Rightarrow Ax + 2Ex = 0 \Rightarrow (A + 2E)x = 0
$$

$$
\Rightarrow 
\begin{bmatrix}
0  & -3 & -3\\
6 & 9 & 6\\
-6 & -6 & -3
\end{bmatrix} x = 0 
\Rightarrow
\begin{bmatrix}
2 & 1 & 0\\
0 & 1 & 1\\
0 & 0 & 0
\end{bmatrix} x = 0
\Rightarrow
x = 
\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}
$$

### (2)

$$
|T| = |A - \lambda E| = 
\begin{vmatrix}
- 2- \lambda & -3 & -3 \\
6 & 7 - \lambda & 6 \\
-6 & -6 & -5 - \lambda
\end{vmatrix} = (\lambda - 1)^2(\lambda + 2) = 0
$$

$$
\lambda_1 - \lambda_2 = 1 \text{ のとき, } T_1x_1 = 0,\text{ そして, } x_1 = \begin{pmatrix} \alpha_1\\\alpha_2\\\alpha_3 \end{pmatrix} \text{ とおくと,}
$$

$$
\begin{bmatrix}
-3 & -3 & -3\\
6 & 6 & 6\\
-6 & -6 & -6
\end{bmatrix}
\begin{bmatrix}
\alpha_1\\
\alpha_2\\
\alpha_3
\end{bmatrix} = 0
\Rightarrow
\begin{bmatrix}
1 & 1 & 1\\
0 & 0 & 0\\
0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
\alpha_1\\
\alpha_2\\
\alpha_3
\end{bmatrix} = 0
$$

$$
x_1 = s
\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix} + t
\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}
$$

$$
d = 1 \quad \text{and} \quad  y = \begin{bmatrix} -2\\1\\1 \end{bmatrix}
$$

### (3)

$$
AP = PD \Rightarrow P^{-1}AP = D
$$

$$
P = 
\begin{bmatrix}
1 & -1 & -1\\
-2 & 1 & 0\\
2 & 0 & 1
\end{bmatrix}
D = 
\begin{bmatrix}
-2 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{bmatrix}
$$

### (4)

$$
\left[ {\begin{array}{c:c}
\begin{matrix}
1 & -1 & -1\\
-2 & 1 & 0\\
2 & 0 & 1\\  
\end{matrix}&
\begin{matrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1\\
\end{matrix}
\end{array}}
\right]
\Rightarrow
\left[ {\begin{array}{c:c}
\begin{matrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1\\
\end{matrix}&
\begin{matrix}
1 & 1 & 1\\
2 & 3 & 2\\
-2 & -2 & -1\\
\end{matrix}
\end{array}}
\right]
\Rightarrow
P^{-1}
\begin{bmatrix}
1 & 1 & 1\\
2 & 3 & 2\\
-2 & -2 & -1\\
\end{bmatrix}
$$

### (5)

$$
\begin{aligned}
A^{10} &= (PDP^{-1})^{10}\\
&= PD^{10}P^{-1}\\
&=
\begin{bmatrix}
1 & -1 & -1\\
-2 & 1 & 0\\
2 & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
1024 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1\\
\end{bmatrix}
\begin{bmatrix}
1 & 1 & 1\\
2 & 3 & 2\\
-2 & -2 & -1\\
\end{bmatrix}\\
&= 
\begin{bmatrix}
1024 & 1023 & 1023\\
-2046 & -2045 & -2046\\
2046 & 2046 & 2047\\
\end{bmatrix}
\end{aligned}
$$