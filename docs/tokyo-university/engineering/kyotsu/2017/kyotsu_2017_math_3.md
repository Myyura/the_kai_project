---
sidebar_label: '2017年度 数学 第3問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2017年度 数学 第3問

## **Author**

## **Description**
次の問いに答えよ。ただし, $i$は虚数単位であり, $e$は自然対数の底, $\log$ は自然対数である。

### (I)
次の定積分 $I$ を考える。

$$
\begin{align}
I = \int_0^{2\pi} \frac{\cos\theta \text{d}\theta}{(2 + \cos\theta)^2}
\end{align}
$$

#### 1.
定積分 $I$ を複素数 $z$ を用いて複素関数積分

$$
\begin{align}
\oint_{\mid z \mid = 1}G(z)\text{d}z
\end{align}
$$

の形に書き直したときの複素関数 $G(z)$ を求めよ。ただし, 積分路は単位円周上を反時計回リに一周するものとする。

#### 2.
全ての極とその極の位数, および留数を求めよ。

#### 3.
積分$I$を求めよ。

### (II)
実数パラメータ$\alpha ,\beta$をもつ実数$\theta$の関数

$$
\begin{align}
f(\theta;\alpha,\beta) = 1 + e^{2i\beta} + \alpha e^{i(\theta + \beta)}
\end{align}
$$

に対して以下の定積分$F(\alpha,\beta)$を考える。

$$
\begin{align}
F(\alpha ,\beta) = \int_0^{2\pi} \text{d}\theta \frac{\text{d}}{\text{d}\theta}[\log f(\theta;\alpha,\beta)]
\end{align}
$$

#### 1.
定積分$F(\alpha,\beta)$を複素数$z$を用いて複素関数積分

$$
\begin{align}
\oint_{\mid z \mid = 1} G(z) \text{d}z
\end{align}
$$

の形に書き直したときの複素関数$G(z)$を求めよ。ただし,　積分路は単位円周上を反時計回リに一周するものとする。

#### 2.
全ての極とその極の位数, および留数を求めよ。

#### 3.
パラメータ$\alpha ,\beta$を場合分けして, $F(\alpha,\beta)$の値を求めよ。ただし,　極が積分路上にある場合は考えなくて良い。

## **Kai**
### (I)
#### 1.
$z = e^{i\theta}$とおく。

$$
\begin{aligned}
dz &= ie^{i \theta} \Leftrightarrow \text{d} \theta = \frac{\text{d}z}{iz} \\
\cos\theta &= \frac{e^{i\theta} + e^{-i\theta}}{2} = \frac{1}{2}\big(z + \frac{1}{z}\big)
\end{aligned}
$$

であるから,　

$$
\begin{aligned}
I &= \oint_{\mid z \mid = 1} \frac{\frac{1}{2}(z+\frac{1}{z})}{\big(2 + \frac{1}{2}(z + \frac{1}{z})\big)^2} \frac{\text{d}z}{iz} \\
G(z) &= \frac{1}{2iz^2} \frac{z^2 + 1}{\frac{1}{4}\big(4 + 4z + \frac{1}{z}\big)^2} \\
&= \frac{2}{i} \frac{z^2 + 1}{(z^2 + 4z + 1)^2}
\end{aligned}
$$

#### 2.
$z^2 + 4z + 1 = 0$とすると,　$z = -2 \pm \sqrt{3}$。以下,　式が見づらくなるので, $\alpha = -2 + \sqrt{3}, \beta =-2 - \sqrt{3}$と書く。$G(z)$は,

$$
G(z) = \frac{2}{i}\frac{z^2 + 1}{(z - \alpha)^2(z - \beta)^2}
$$

となるので,　極は$z = -2 \pm \sqrt{3}$の2つで,　それぞれ2位。$z = \alpha$における留数は,

$$
\begin{aligned}
\text{Res}_{z = \alpha} G(z) &= \lim_{z \rightarrow \alpha} \frac{\text{d}}{\text{d}z}(z - \alpha)^2G(z) \\
&= \frac{2}{i}\lim_{z \rightarrow \alpha} \frac{\text{d}}{\text{d}z} \frac{z^2 + 1}{(z - \beta)^2} \\
&= \frac{2}{i}\lim_{z \rightarrow \alpha} \frac{2z(z - \beta)^2 - (z^2 + 1)(2z - 2\beta)}{(z - \beta)^4} \\
&= \frac{2}{i}\lim_{z \rightarrow \alpha} \frac{-2\beta z^2 + (2\beta ^2 - 2)z + 2\beta}{(z - \beta)^4} \\
&= \frac{2}{i} \frac{-2\beta \alpha ^2 + \alpha(2\beta^2 - 2) + 2\beta}{(\alpha - \beta)^4} \\
&= \frac{4}{i} \frac{-(\alpha - \beta)(1 +\alpha \beta)}{(\alpha - \beta)^4} \\
&= \frac{4}{i} \frac{-2\sqrt{3}(1 + 1)}{(2\sqrt{3})^4} = -\frac{1}{i}\frac{\sqrt{3}}{9} 
\end{aligned}
$$

$z = \beta$における留数も同様にして計算でき,

$$
\text{Res}_{z = \beta} G(z)= \frac{4}{i} \frac{-(\beta - \alpha)(1 + \beta \alpha)}{(\beta - \alpha)^4} = \frac{1}{i}\frac{\sqrt{3}}{9} 
$$

#### 3.
$z = 1$内の極は$z = \alpha$のみであることに注意して,　留数定理より,　

$$
\begin{aligned}
I &= \oint_{\mid z \mid = 1}G(z)\text{d}z \\
&= 2\pi i \text{Res}_{z = \beta} G(z) \\
&= 2\pi i \cdot \big(-\frac{1}{i} \frac{\sqrt{3}}{9}\big) = -\frac{2\sqrt{3}}{9} \pi
\end{aligned}
$$

### (II)
#### 1.

$$
\begin{aligned}
\frac{\text{d}}{\text{d}\theta}[\log f(\theta;\alpha ,\beta)] &= \frac{f'(\theta)}{f(\theta)}\\
&= \frac{i \alpha e^{i(\theta + \beta)}}{1 + e^{2i \beta} + \alpha e^{i(\theta + \beta)}} \\
&= \frac{i \alpha e^{i\beta}z}{1 + e^{2i \beta} + \alpha e^{i\beta}z} \quad (z = e^{i \theta}) \\
&= \frac{iz}{z + \frac{e^{i\beta}+e^{-i\beta}}{\alpha}} \\
&= \frac{iz}{z + \frac{2}{\alpha}\cos \beta}
\end{aligned}
$$

であるから,

$$
F(\alpha,\beta) = \oint_{\mid z \mid =1} \frac{\text{d}z}{iz} \frac{iz}{z + \frac{2}{\alpha} \cos \beta} = \oint_{\mid z \mid = 1} \frac{\text{d}z}{z + \frac{2}{\alpha}\cos \beta} 
$$

$$
\therefore G(z) = \frac{1}{z + \frac{2}{\alpha}\cos \beta}
$$

#### 2.
$\alpha = 0$のとき,　極は存在しない。

$\alpha \neq 0$のとき,　極は$z = -\frac{2}{\alpha}\cos \beta$の1つで, 1位.

留数は,

$$
\lim_{z \rightarrow -\frac{2}{\alpha} \cos \beta}(z + \frac{2}{\alpha}\cos \beta)G(z) = 1
$$

#### 3.
$\alpha,\beta$は実数だから, 極$z = -\frac{2}{\alpha}\cos \beta$は実軸上に存在する。この極が, $z = 1$の内部にあるときと,　外部にある時で場合分けすれば良い。

##### (i)
$\big|-\frac{2}{\alpha}\cos \beta \big| < 1$かつ$\alpha \neq 0$のとき,　極は$z = 1$内に存在し,　留数定理より,　

$$
F(\alpha,\beta) = 2\pi i \cdot 1 =2\pi i
$$

##### (ii)
$\big|-\frac{2}{\alpha}\cos \beta \big| > 1$または$\alpha = 0$のとき,　$z = 1$内に極は存在しないので,　

$$
F(\alpha,\beta) = 0
$$