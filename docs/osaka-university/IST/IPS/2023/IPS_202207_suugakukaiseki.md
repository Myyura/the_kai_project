---
sidebar_label: "2022年7月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Higher-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Complex-Analysis.Argument-Principle-and-Winding-Number
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 大阪大学 情報科学研究科 情報数理学専攻 2022年7月実施 情報数理学 数学解析

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### 1. 高階線形微分方程式

$n$ を正の整数とする。実数値関数 $x(t)$ に関する微分方程式

$$
\frac{d^n x}{dt^n}=x
$$

の一般解を求めよ。

### 2. 複素曲線と積分

複素数値関数

$$
\phi(t)=e^{2\pi it}-4i(1-|t|)t,\qquad -1\le t\le1
$$

を考える。以下の問いに答えなさい。

(1) $\phi(t)$ が表す曲線の概形を複素平面上に図示しなさい。

(2) 次の積分を求めなさい。

$$
I=\int_{-1}^{1}\frac{\phi'(t)}{\phi(t)(\phi(t)-i)}\,dt.
$$

### 3. フーリエ変換と広義積分

以下の問いに答えなさい。

(1) 以下の関数のフーリエ変換 $\widehat f(\omega)$ を求めなさい。

$$
f(t)=
\begin{cases}
2-|t|,&|t|\le2,\\
0,&|t|>2.
\end{cases}
$$

(2) $\displaystyle I_2=\int_0^\infty\frac{\sin^2x}{x^2}\,dx$ を求めなさい。

(3) $\displaystyle I_4=\int_0^\infty\frac{\sin^4x}{x^4}\,dx$ を求めなさい。

#### 题目描述

**1.** 设 $n$ 为正整数，求实值函数 $x(t)$ 满足的微分方程 $d^n x/dt^n=x$ 的通解。

**2. 复平面曲线与积分**

考虑复值函数

$$
\phi(t)=e^{2\pi it}-4i(1-|t|)t,\qquad -1\le t\le1.
$$

(1) 在复平面上画出该函数所表示曲线的概形。

(2) 求积分

$$
I=\int_{-1}^{1}\frac{\phi'(t)}{\phi(t)(\phi(t)-i)}\,dt.
$$

**第3题** 回答下列问题。

(1) 求函数

$$
f(t)=
\begin{cases}
2-|t|,&|t|\le2,\\
0,&|t|>2
\end{cases}
$$

的傅里叶变换 $\widehat f(\omega)$。

(2) 求 $\displaystyle I_2=\int_0^\infty\frac{\sin^2x}{x^2}\,dx$。

(3) 求 $\displaystyle I_4=\int_0^\infty\frac{\sin^4x}{x^4}\,dx$。

## **Kai**

### 1. 高階線形微分方程式

特性方程式は $\lambda^n-1=0$ であり、その相異なる $n$ 個の根は

$$
\begin{gathered}
\lambda_k=e^{2\pi i k/n}=\cos\theta_k+i\sin\theta_k,\\
\theta_k=\frac{2\pi k}{n},\\
k=0,1,\ldots,n-1
\end{gathered}
$$

である。非実根 $\lambda_k$ と $\lambda_{n-k}=\overline{\lambda_k}$ を組にすると、対応する実数解は

$$
e^{t\cos\theta_k}\cos(t\sin\theta_k),
\qquad
e^{t\cos\theta_k}\sin(t\sin\theta_k)
$$

となる。

**$n=2m$（$m\ge1$）の場合**、実根は $1,-1$ なので、実数値の一般解は

$$
\boxed{\begin{aligned}
x(t)={}&C_1e^t+C_2e^{-t}\\
&+\sum_{k=1}^{m-1}e^{t\cos\theta_k}
\left[A_k\cos(t\sin\theta_k)+B_k\sin(t\sin\theta_k)\right]
\end{aligned}}.
$$

**$n=2m-1$（$m\ge1$）の場合**、実根は $1$ のみなので、

$$
\boxed{
x(t)=C_1e^t
+\sum_{k=1}^{m-1}e^{t\cos\theta_k}
\left[A_k\cos(t\sin\theta_k)+B_k\sin(t\sin\theta_k)\right]
}.
$$

ここで $C_1,C_2,A_k,B_k$ は任意の実定数であり、各場合に独立な定数の個数は $n$ である。特性根がすべて単根なので、これらは実数解全体を表す。空の和は $0$ とし、$n=1$ では $x=C_1e^t$、$n=2$ では $x=C_1e^t+C_2e^{-t}$ となる。

### 2. 複素曲線と積分

#### (1)

$\phi(t)=x(t)+iy(t)$ とおけば、

$$
x(t)=\cos(2\pi t),\qquad
 y(t)=\sin(2\pi t)-4(1-|t|)t.
$$

$x(-t)=x(t)$、$y(-t)=-y(t)$ より、曲線全体は実軸に関して対称である。主な点は次のとおりである。

| $t$ | $\phi(t)$ |
| --- | --- |
| $-1,0,1$ | $1$ |
| $-3/4$ | $7i/4$ |
| $-1/2$ | $-1+i$ |
| $-1/4$ | $-i/4$ |
| $1/4$ | $i/4$ |
| $1/2$ | $-1-i$ |
| $3/4$ | $-7i/4$ |

![複素曲線の概形。矢印はパラメータ t が増加する向き。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/IPS/2023/IPS_202207_suugakukaiseki_2_curve.svg)

$0\le t\le1$ の部分を $C_+$ とする。$0<t<1/2$ では、$x(t)=x(1-t)$ であり、

$$
y(t)-y(1-t)=2\sin(2\pi t)>0.
$$

したがって、$C_+$ は上側の枝を $1$ から $-1-i$ へ進み、下側の枝を通って $1$ に戻る単純な反時計回りの閉曲線である。$-1\le t\le0$ の部分 $C_-$ はその実軸対称像を逆向きにたどるので、こちらも反時計回りとなる。

両曲線は $1$ と負の実軸上の一点で交わる。後者は $\sin(2\pi t)=4t(1-t)$ の $0<t<1/2$ における解に対応し、およそ $-0.472$ である。

#### (2)

$C$ を $t=-1$ から $t=1$ へ進む向きの曲線とすると、

$$
I=\int_C\frac{dz}{z(z-i)}.
$$

$C_+$ の虚軸との交点は $i/4,-7i/4$、$C_-$ の交点は $7i/4,-i/4$ である。よって、$0$ は両方の閉曲線の内部にあり、$i$ は $C_-$ の内部にのみある。したがって、回転数は

$$
\operatorname{Ind}(C,0)=2,\qquad
\operatorname{Ind}(C,i)=1.
$$

また、曲線上に $0,i$ は存在しない。$f(z)=1/[z(z-i)]$ の留数は

$$
\operatorname{Res}(f,0)=\frac1{-i}=i,\qquad
\operatorname{Res}(f,i)=\frac1i=-i.
$$

回転数を含む留数定理により、

$$
\boxed{
I=2\pi i\left\{2\operatorname{Res}(f,0)
+\operatorname{Res}(f,i)\right\}
=2\pi i(2i-i)=-2\pi
}.
$$

### 3. フーリエ変換と広義積分

フーリエ変換の規約を

$$
\widehat f(\omega)=\frac1{\sqrt{2\pi}}
\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt
$$

とする。

#### (1)

$f$ は偶関数なので，$\omega\ne0$ に対して

$$
\begin{aligned}
\widehat f(\omega)
&=\frac2{\sqrt{2\pi}}\int_0^2(2-t)\cos(\omega t)\,dt\\
&=\frac2{\sqrt{2\pi}}
\left[\frac{(2-t)\sin(\omega t)}{\omega}
-\frac{\cos(\omega t)}{\omega^2}\right]_0^2\\
&=\frac{2(1-\cos2\omega)}{\sqrt{2\pi}\,\omega^2}
=\frac4{\sqrt{2\pi}}\frac{\sin^2\omega}{\omega^2}.
\end{aligned}
$$

また，$\widehat f(0)=\frac2{\sqrt{2\pi}}\int_0^2(2-t)\,dt=\frac4{\sqrt{2\pi}}$ より，

$$
\boxed{
\widehat f(\omega)=
\begin{cases}
\dfrac4{\sqrt{2\pi}}\dfrac{\sin^2\omega}{\omega^2},&\omega\ne0,\\[2mm]
\dfrac4{\sqrt{2\pi}},&\omega=0.
\end{cases}
}
$$

#### (2)

$f$ は連続で $f,\widehat f\in L^1(\mathbb R)$ であるから，フーリエ反転公式を $t=0$ に適用すると

$$
2=f(0)
=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}\widehat f(\omega)\,d\omega
=\frac2\pi\int_{-\infty}^{\infty}\frac{\sin^2\omega}{\omega^2}\,d\omega
=\frac4\pi I_2.
$$

したがって

$$
\boxed{I_2=\frac\pi2}.
$$

#### (3)

$f\in L^2(\mathbb R)$ より，パーセバルの等式を用いると

$$
\int_{-\infty}^{\infty}|\widehat f(\omega)|^2\,d\omega
=\int_{-\infty}^{\infty}|f(t)|^2\,dt
=2\int_0^2(2-t)^2\,dt=\frac{16}{3}.
$$

一方，(1) より

$$
\int_{-\infty}^{\infty}|\widehat f(\omega)|^2\,d\omega
=\frac8\pi\int_{-\infty}^{\infty}\frac{\sin^4\omega}{\omega^4}\,d\omega
=\frac{16}\pi I_4.
$$

よって

$$
\boxed{I_4=\frac\pi3}.
$$

## **Reference**

- [大阪大学公式：令和5年度 情報数理学専攻 入学者選抜試験問題（2022年7月30日実施、数学解析：PDF 5ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/IPS_nyushi_2023_JA.pdf)
