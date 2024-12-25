---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年度 複素関数論
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年度 複素関数論


## **Author**
Zero

## **Description**
図に示す曲線 $C$ に沿った複素積分 $\oint_C\frac{(\ln z)^2}{z^2 + 1}dz$ を考える．ただし，$R > 1,\varepsilon < 1$ とする．次
の各問に答えよ．

(1) $\oint_C\frac{(\ln z)^2}{z^2 + 1}dz$ の値を求めよ．

(2) $\oint_C\frac{(\ln z)^2}{z^2 + 1}dz$ の値を用いて，$\int_{0}^{\infty}\frac{(\ln x)^2}{x^2 + 1}dx = \frac{\pi^3}{8}$ を示せ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu_2018_complex_function_theory_p1.png" width="517" height="380" alt=""/>
</figure>

## **Kai** 
### (1)
$f(z) = \frac{(\ln z)^2}{z^2 + 1}$ とおくと、$f(z)$ は $C$ 内部に $1$ 位の極 $i$ をもつ. よって、留数定理より、

$$
\begin{aligned}
\oint f(z)dz &= 2\pi i \cdot \text{Res}_{z = i} \frac{(\ln z)^2}{z^2 + 1} \\
&= 2\pi i \cdot \frac{(\ln i)^2}{2i} \\
&= (\ln i)^2 \cdot \pi \\
&= -\frac{\pi^3}{4}
\end{aligned}
$$

### (2)
曲線 $C$ を 
- 区間 $[Re^{io},Re^{i\pi}]$ を $C_R$ 
- 区間 $[-R,-\varepsilon]$ を $C_1$ 
- 区間 $[\varepsilon e^{i\pi},\varepsilon e^{io}]$ を $C_\varepsilon$ 
- 区間 $[\varepsilon, R]$ を $C_2$ として。$C = C_R + C_1 + C_{\varepsilon} + C_2$ と表す。

$$
\begin{align}
\oint_C f(z)dz = \int_{CR}f(z)dz + \int_{C_1}f(z)dz + \int_{C\varepsilon}f(z)dz + \int_{C_2}f(z)dz \tag{①}
\end{align}
$$

ここで、

$$
\begin{aligned}
\bigg|\int_{C_R}f(z)dz\bigg| &= \bigg|\int_0^{\pi}\frac{(\ln R + i\theta)^2}{R^2e^{2i\theta} + 1} \cdot iRe^{i\theta}d\theta\bigg| \\
&\leqq \int_0^{\pi}\bigg|\frac{(\ln R + i\theta)^2}{R^2e^{2i\theta} + 1}\cdot R d\theta\bigg| \\
&\leqq \int_0^{\pi}\frac{(\ln R)^2 + \pi^2}{R^2 - 1} \cdot R d\theta \\
&= \frac{R}{R^2 - 1}[(\ln R)^2 + \pi^2] \cdot \pi \overset{R \rightarrow \infty}{\longrightarrow}0 
\end{aligned}
$$

$$
\begin{aligned}
\bigg|\int_{C\varepsilon}f(z)dz\bigg| &= \bigg|\int_{\pi}^0 \frac{(\ln \varepsilon + i\theta)^2}{\varepsilon^2e^{2i\theta} + 1}i\varepsilon e^{i\theta}d\theta\bigg| \\
&\leqq \int_0^{\pi}\bigg|\frac{(\ln \varepsilon)^2 + \pi^2}{1 - \varepsilon^2}\cdot \varepsilon d\theta\bigg| \\
&= \frac{R}{R^2 - 1}[(\ln R)^2 + \pi^3] \cdot \pi \overset{\varepsilon \rightarrow 0}{\longrightarrow} 0
\end{aligned}
$$

$$
\begin{align}
\lim_{R \rightarrow \infty,\varepsilon \rightarrow 0}\int_{C_1}f(z)dz &= \int_0^{\infty}\frac{(\ln x + \pi i)^2}{x^2 + 1}dx \notag \\
&= \int_0^{\infty} \frac{(\ln x)^2}{x^2 + 1}dx + 2\pi i \int_0^{\infty}\frac{\ln x}{x^2 + 1}dx - \pi^2\int_0^{\infty}\frac{1}{x^2 + 1}dx \notag \\
&= \int_0^{\infty} \frac{(\ln x)^2}{x^2 + 1}dx + 2\pi i \int_0^{\infty}\frac{\ln x}{x^2 + 1}dx - \pi^2[\tan^{-1}x]_0^{\infty} \notag \\
&= \int_0^{\infty}\frac{(\ln x)^2}{x^2 + 1}dx + 2\pi i \int_0^{\infty}\frac{ln x}{x^2 + 1}dx - \frac{\pi^3}{2} \tag{②}
\end{align}
$$

$$
\begin{align}
\lim_{R \rightarrow \infty,\varepsilon \rightarrow 0}\int_{C_1}f(z)dz = \int_0^{\infty} \frac{(\ln x)^2}{x^2 + 1}dx \tag{③}
\end{align}
$$

② について、$\int_0^{\infty}\frac{\ln x}{x^2 + 1}dx$ を求める。$q(z) = \frac{\ln z}{z^2 + 1}$ とおくと。

$$
\begin{aligned}
\oint_C q(z)dz = 2\pi i \cdot \lim_{z \rightarrow i} \frac{\ln z}{z \rightarrow i} = 2\pi i \cdot \frac{ln i}{2i} = \pi \cdot i \cdot \frac{\pi}{2} = \frac{\pi^2}{2}i
\end{aligned}
$$

$f(z)$ と同様に $q(z)$ について、

$$
\begin{aligned}
\bigg|\int_{CR}q(z)dz\bigg| &= \bigg|\int_0^{\pi}\frac{ln R + i\theta}{R^2e^{2i\theta} + 1}i Re^{i\theta}d\theta\bigg| \\
&\leqq \int_0^{\pi} \frac{R}{R^2 - 1} \cdot \sqrt{(ln R)^2 + \pi^2} d\theta \\
&= \frac{R}{R^2 - 1}\sqrt{(\ln R)^2 + \pi^2} \cdot \pi \overset{R \rightarrow \infty}{\longrightarrow} 0
\end{aligned}
$$

$$
\begin{aligned}
\bigg|\int_{C\varepsilon}q(z)dz\bigg| &= \bigg|\int_{\pi}^0\frac{\ln \varepsilon + i\theta}{\varepsilon^2 e^{2i\theta} + 1}i\varepsilon e^{i\theta}d\theta\bigg| \\
&\leqq \int_0^{\pi}\frac{\varepsilon}{1 - \varepsilon^2}\sqrt{(\ln \varepsilon)^2 + \pi^2}d\theta \\
&= \frac{\varepsilon}{1 - \varepsilon^2}\sqrt{(\ln \varepsilon)^2 + \pi^2} \cdot \pi \overset{\varepsilon \rightarrow 0}{\longrightarrow} 0
\end{aligned}
$$

$$
\begin{aligned}
\lim_{R \rightarrow \infty,\varepsilon \rightarrow 0}\int_{C_1}q(z)dz &= \int_0^{\infty}\frac{ln x}{x^2 + 1}dx 
\end{aligned}
$$

より、

$$
\frac{\pi^2}{2}i = 2\int_0^{\infty}\frac{ln x}{x^2 + 1}dx 
$$

より、

$$
\frac{\pi^2}{2}i = 2\int_0^{\infty}\frac{ln x}{x^2 + 1}dx + \frac{\pi^2}{2}i
$$

$$
\begin{align}
\therefore \int_0^{\infty}\frac{ln x}{x^2 + 1}dx = 0 \tag{④}
\end{align}
$$

① ~ ④　から、

$$
-\frac{\pi^3}{4} = 0 + 2\int_0^{\infty}\frac{(\ln x)^2}{x^2 + 1}dx - \frac{\pi^3}{2} + 0
$$

$$
\therefore \int_0^{\infty}\frac{(\ln x)^2}{x^2 + 1}dx = \frac{\pi^3}{8}
$$