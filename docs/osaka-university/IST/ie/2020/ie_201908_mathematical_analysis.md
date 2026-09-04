---
sidebar_label: 2020年度 数学解析と信号処理
tags:
  - Osaka-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Fourier-Transform
---
# 大阪大学 情報科学研究科 情報工学 2020年度 数学解析と信号処理

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
各問について導出過程も示せ。

(1-1) $-\pi\le x<\pi$ で $f(x)=x^2$、$f(x+2\pi)=f(x)$ とする。Fourier級数を求めよ。

(1-2) その結果を用い $\sum_{n=1}^\infty n^{-4}$ を求めよ。

(2) $H(z)=(1-az)/(z-a)$、実数 $a$ は $-1\le a<1$ とする。

- (2-1) 次の3方式のうち $H$ を実現するものを選び、$x(n),y(n)$ の関係を求めよ。（あ）$v=x+ay$, $y(n)=v(n-1)-ax(n)$；（い）$v(n)=x(n)-av(n-1)$, $y(n)=v(n)+av(n-1)$；（う）$y(n)=ax(n-1)-ax(n)$。
- (2-2) $a=0,-1$ の各場合の機能を、加算、遅延、反転、増幅、ハイパス、ローパス、そのまま通過（all-pass）から選び、理由を説明せよ。
- (2-3) 振幅特性と位相特性を求めよ。

## **Kai**
### (1)

(1-1) 偶関数なので $b_n=0$。部分積分により

$$
a_0=\frac2\pi\int_0^\pi x^2dx=\frac{2\pi^2}3,\qquad
 a_n=\frac2\pi\int_0^\pi x^2\cos nx\,dx=\frac{4(-1)^n}{n^2}.
$$

よって

$$
\boxed{f(x)=\frac{\pi^2}3+4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos nx}.
$$

(1-2) Parsevalの等式から

$$
\frac1\pi\int_{-\pi}^{\pi}x^4dx=\frac{a_0^2}{2}+\sum_{n=1}^\infty a_n^2,
\qquad\frac{2\pi^4}5=\frac{2\pi^4}9+16\sum_{n=1}^\infty\frac1{n^4}.
$$

したがって $\boxed{\sum_{n=1}^\infty n^{-4}=\pi^4/90}$。

### (2)

(2-1) **（あ）**。中間信号を消去すると

$$
\boxed{y(n)=x(n-1)-ax(n)+ay(n-1)}.
$$

$z$ 変換すれば $Y/X=(z^{-1}-a)/(1-az^{-1})=(1-az)/(z-a)$。

(2-2) $a=0$ では $H=z^{-1}$ なので **1標本遅延**。$a=-1$ では分子・分母の共通因子を消去して $H=1$ となり、零初期状態では **そのまま通過**。

(2-3) $-1<a<1$, $z=e^{i\omega}$ とすると

$$
H(e^{i\omega})=\frac{(1-a)\cos(\omega/2)-i(1+a)\sin(\omega/2)}{(1-a)\cos(\omega/2)+i(1+a)\sin(\omega/2)}.
$$

分子と分母が共役なので

$$
\boxed{|H(e^{i\omega})|=1},
$$

$$
\boxed{\arg H(e^{i\omega})=-2\operatorname{atan2}\bigl((1+a)\sin(\omega/2),(1-a)\cos(\omega/2)\bigr)\pmod{2\pi}}.
$$

$-\pi<\omega<\pi$ では $-2\tan^{-1}(\frac{1+a}{1-a}\tan\frac\omega2)$ と書ける。$a=-1$ は $H=1$ と連続延長し、振幅1、位相0である。
