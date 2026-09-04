---
sidebar_label: "2019年8月実施 数理科学 I [3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$u(x,y),v(x,y)$ は実2変数の実数値関数とする。$z=x+iy$ に対し $f(z)=u(x,y)+iv(x,y)$ とおく。ただし $i=\sqrt{-1}$ である。

$$
u(x,y)=x^3-3xy^2+x^2-y^2-2x
$$

であり、$f$ は $f(0)=0$ を満たす正則関数である。

(1) $v(x,y)$ を求め、$f(z)$ を $z$ の式で表せ。

(2) 整数 $n$ に対し、円 $|z-n+i|=2$ を反時計回りに一周する閉曲線を $C_n$ とおき、

$$
I(n)=\int_{C_n}\frac{3f(z)}{z^2(z^2-1)(z^2-4)}\,dz
$$

とする。$|I(n)|$ が最大となる $n$ と、そのときの $I(n)$ を求めよ。

## **Kai**

### (1)
$u=\Re(z^3+z^2-2z)$ である。虚部の加法定数は $f(0)=0$ より $0$ なので、

$$
\boxed{v=3x^2y-y^3+2xy-2y,\qquad f(z)=z^3+z^2-2z}.
$$

### (2)
被積分関数を約分すると

$$
\frac3{z(z+1)(z-2)}=\frac1{z+1}-\frac3{2z}+\frac1{2(z-2)}.
$$

実数の極 $a$ が $C_n$ の内部にある条件は $(a-n)^2+1<4$、すなわち $|a-n|\le1$ である。留数定理より

$$
\frac{I(n)}{2\pi i}=\begin{cases}
1&n=-2,\\-1/2&n=-1,0,\\-1&n=1,\\1/2&n=2,3,\\0&\text{その他}.
\end{cases}
$$

よって最大値は $2\pi$ で、

$$
\boxed{n=-2:\ I(-2)=2\pi i,\qquad n=1:\ I(1)=-2\pi i}.
$$
