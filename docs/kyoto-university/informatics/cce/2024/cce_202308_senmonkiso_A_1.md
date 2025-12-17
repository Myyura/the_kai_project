---
sidebar_label: "2023年8月実施 専門基礎A [A-1]"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 通信情報システム専攻 2023年8月実施 専門基礎A \[A-1\]

## **Author**
祭音Myyura (with GPT5.1)

## **Description**
下記のすべての問に答えよ。

### (1)
下記の問に答えよ。ただし

$$
z = f(x,y),\quad x = r\cos\theta,\quad y = r\sin\theta,\quad r>0
$$

とする。

(a) 次の式が成り立つことを示せ。

$$
\left(\frac{\partial z}{\partial x}\right)^2
+ \left(\frac{\partial z}{\partial y}\right)^2
  = \left(\frac{\partial z}{\partial r}\right)^2
+ \frac1{r^2}\left(\frac{\partial z}{\partial \theta}\right)^2
$$

(b) 次の式が成り立つことを示せ。

$$
\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2}=
\frac{\partial^2 z}{\partial r^2}
+ \frac1{r^2}\frac{\partial^2 z}{\partial \theta^2}
+ \frac1{r}\frac{\partial z}{\partial r}
$$


### (2)
下記の問に答えよ。ただし，関数 $B(p,q)$ は

$$
B(p,q) = \int_0^1 x^{p-1}(1-x)^{q-1} dx\qquad (p>0,q>0)
$$

で与えられる。

(a) 次の値を求めよ。

$$
B\left(\frac12,1\right)
$$

(b) 次の値を求めよ。

$$
B\left(\frac12,\frac12\right)
$$

(c) 次の式が成り立つことを示せ（$p>0,q>1$）。

$$
pB(p,q)=(q-1)B(p+1,q-1)
$$

### (3)
下記の問に答えよ。ただし行列 $A$ は

$$
A=
\begin{bmatrix}
1 & 2 & 2\\
2 & 1 & -2\\
2 & -2 & 1
\end{bmatrix}
$$

で与えられる。

(a) $A$ の固有方程式を求めよ。

(b) $A$ の固有値を求めよ。

(c) $A$ の固有ベクトルをすべて求めよ。

## **Kai**
### (1)
#### (a)
連鎖律より

$$
\frac{\partial z}{\partial r}
= \frac{\partial z}{\partial x}\frac{\partial x}{\partial r}
+\frac{\partial z}{\partial y}\frac{\partial y}{\partial r}
= z_x\cos\theta + z_y\sin\theta,
$$

$$
\frac{\partial z}{\partial \theta}
= \frac{\partial z}{\partial x}\frac{\partial x}{\partial \theta}
+\frac{\partial z}{\partial y}\frac{\partial y}{\partial \theta}
= z_x(-r\sin\theta) + z_y(r\cos\theta)
= r(-z_x\sin\theta + z_y\cos\theta)
$$

と書ける（ここで $z_x=\partial z/\partial x$，$z_y=\partial z/\partial y$）。

したがって

$$
\begin{aligned}
\left(\frac{\partial z}{\partial r}\right)^2
&= (z_x\cos\theta + z_y\sin\theta)^2,\\
\frac1{r^2}\left(\frac{\partial z}{\partial \theta}\right)^2
&= (-z_x\sin\theta + z_y\cos\theta)^2.
\end{aligned}
$$

2 つを足すと

$$
(z_x^2+z_y^2)(\cos^2\theta+\sin^2\theta)
+ 2 z_x z_y (\cos\theta\sin\theta - \sin\theta\cos\theta)
  = z_x^2+z_y^2.
$$

よって

$$
\left(\frac{\partial z}{\partial x}\right)^2
+ \left(\frac{\partial z}{\partial y}\right)^2
  = \left(\frac{\partial z}{\partial r}\right)^2
+ \frac1{r^2}\left(\frac{\partial z}{\partial \theta}\right)^2
$$

が示される。

#### (b)
上で求めた

$$
z_r = z_x\cos\theta + z_y\sin\theta,\qquad
z_\theta = r(-z_x\sin\theta+z_y\cos\theta)
$$

をさらに $r,\theta$ について微分し、

$$
z_{rr}
= z_{xx}\cos^2\theta
+ 2z_{xy}\sin\theta\cos\theta
+ z_{yy}\sin^2\theta
$$

$$
z_{\theta \theta}
= r^2(z_{xx} \sin^2 \theta - 2z_{xy} \sin \theta \cos \theta + z_{yy} \cos^2 \theta) - rz_r
$$

整理すると

$$
z_{xx}+z_{yy}
= z_{rr} + \frac1{r}z_r + \frac1{r^2}z_{\theta\theta}
$$

が得られる（極座標でのラプラシアンの標準公式）。

### (2) ベータ関数
#### (a)
定義より

$$
B\left(\frac12,1\right)
= \int_0^1 x^{-1/2}(1-x)^{0}dx
= \int_0^1 x^{-1/2}dx
= \left[2x^{1/2}\right]_0^1
= 2.
$$

#### (b)

$$
B\left(\frac12,\frac12\right)
= \int_0^1 x^{-1/2}(1-x)^{-1/2},dx.
$$

置換 $x=\sin^2 t$ （$0\le t\le\pi/2$）を用いると

$$
dx = 2\sin t\cos tdt,\quad
x^{-1/2} = (\sin t)^{-1},\quad
(1-x)^{-1/2} = (\cos t)^{-1},
$$

より

$$
B\left(\frac12,\frac12\right)
= \int_0^{\pi/2} 2dt
= \pi.
$$

#### (c)

$$
B(p,q) = \int_0^1 x^{p-1}(1-x)^{q-1}dx
$$

から始める。関数

$$
F(x)=x^{p}(1-x)^{q-1}
$$

を考えると

$$
F'(x)=p x^{p-1}(1-x)^{q-1}
-(q-1)x^{p}(1-x)^{q-2}.
$$

これを整理して

$$
p x^{p-1}(1-x)^{q-1}
= F'(x) + (q-1)x^{p}(1-x)^{q-2}.
$$

両辺を $0$ から $1$ まで積分すると

$$
pB(p,q)
= \int_0^1 F'(x)dx
+(q-1)\int_0^1 x^{p}(1-x)^{q-2}dx.
$$

ここで $p>0,q>1$ なので $x^{p}(1-x)^{q-1}$ は端点で $0$ になり，
$\int_0^1 F'(x)dx = F(1)-F(0)=0$。したがって

$$
pB(p,q) = (q-1)\int_0^1 x^{p}(1-x)^{q-2}dx
= (q-1)B(p+1,q-1).
$$

### (3)
#### (a)
固有値を $\lambda$ とすると固有方程式は

$$
\det(\lambda I - A)=0.
$$

計算すると

$$
\det(\lambda I-A)
= \lambda^3-3\lambda^2-9\lambda+27
= (\lambda-3)^2(\lambda+3).
$$

したがって固有方程式は

$$
(\lambda-3)^2(\lambda+3)=0
$$

#### (b)
固有方程式から

$$
\lambda_1=3\ （重複度2）, \quad \lambda_2=-3
$$

#### (c)
$\lambda=-3$ のとき $(A+3I)\mathbf{v}=0$ を解くと，例えば

$$
  \mathbf{v}_{-3} =
  \begin{bmatrix}-1\\1\\1\end{bmatrix}
  \quad(\text{あるいは } [1,-1,-1]^T でもよい)
$$

が得られる。

$\lambda=3$ のとき $(A-3I)\mathbf{v}=0$ を解くと，独立な解として

$$
  \mathbf{v}*{3}^{(1)} =
  \begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
  \mathbf{v}*{3}^{(2)} =
  \begin{bmatrix}1\\0\\1\end{bmatrix}
$$
  をとることができる。

したがって，固有値と対応する固有ベクトルは例えば

$$
\lambda=-3:\
\mathbf{v} \propto
\begin{bmatrix}-1\\1\\1\end{bmatrix},
$$

$$
\lambda=3:\
\mathbf{v} \propto
\begin{bmatrix}1\\1\\0\end{bmatrix},\
\begin{bmatrix}1\\0\\1\end{bmatrix}
$$

となる。
