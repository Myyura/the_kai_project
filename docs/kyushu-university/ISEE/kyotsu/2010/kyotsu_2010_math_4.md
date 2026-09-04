---
sidebar_label: "2010年度入学 数学 問4（複素関数論）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Contour-Integration
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2010年度入学 数学 問4（複素関数論）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の積分の値を複素積分によって求めよ。
ただし、 $0 < m < n$ である。

$$
\int_{-\infty}^{\infty} \frac{e^{mx}}{1 + e^{nx}} dx
$$

### 题目描述

设参数 $m,n$ 满足 $0<m<n$。使用复积分方法求广义积分

$$
\int_{-\infty}^{\infty}\frac{e^{mx}}{1+e^{nx}}\,dx
$$

的值。

## **Kai**

Let $f(z) = \frac{e^{mz}}{1+e^{nz}}$ . We consider the rectangular contour $C_R$ with vertices at $-R, R, R + i\frac{2\pi}{n}, -R + i\frac{2\pi}{n}$ for a large $R>0$ .  The integral around this contour is given by

$$
\oint_{C_R} \frac{e^{mz}}{1+e^{nz}}dz = \int_{-R}^{R} \frac{e^{mx}}{1+e^{nx}}dx + \int_{0}^{\frac{2\pi}{n}} \frac{e^{m(R+iy)}}{1+e^{n(R+iy)}}idy + \int_{R}^{-R} \frac{e^{m(x+i\frac{2\pi}{n})}}{1+e^{n(x+i\frac{2\pi}{n})}}dx + \int_{\frac{2\pi}{n}}^{0} \frac{e^{m(-R+iy)}}{1+e^{n(-R+iy)}}idy
$$

As $R \to \infty$ , the second and the fourth integrals vanish. The third integral can be rewritten as

$$
\int_{R}^{-R} \frac{e^{m(x+i\frac{2\pi}{n})}}{1+e^{n(x+i\frac{2\pi}{n})}}dx = -\int_{-R}^{R} \frac{e^{mx} e^{i\frac{2\pi m}{n}}}{1+e^{nx} e^{i2\pi}}dx = -e^{i\frac{2\pi m}{n}} \int_{-R}^{R} \frac{e^{mx}}{1+e^{nx}}dx
$$

Thus,

$$
\oint_{C_R} \frac{e^{mz}}{1+e^{nz}}dz = (1 - e^{i\frac{2\pi m}{n}}) \int_{-\infty}^{\infty} \frac{e^{mx}}{1+e^{nx}}dx
$$

The pole of $f(z)$ inside the contour is at $z = i\frac{\pi}{n}$ .  The residue at this pole is given by

$$
\text{Res}(f, i\frac{\pi}{n}) = \lim_{z \to i\frac{\pi}{n}} (z - i\frac{\pi}{n}) \frac{e^{mz}}{1+e^{nz}} = \lim_{z \to i\frac{\pi}{n}} \frac{e^{mz}}{ne^{nz}} = \frac{e^{i\frac{\pi m}{n}}}{ne^{i\pi}} = -\frac{e^{i\frac{\pi m}{n}}}{n}
$$

By residue theorem,

$$
\oint_{C_R} \frac{e^{mz}}{1+e^{nz}}dz = 2\pi i \text{Res}(f, i\frac{\pi}{n}) = -2\pi i \frac{e^{i\frac{\pi m}{n}}}{n}
$$

Thus,

$$
(1 - e^{i\frac{2\pi m}{n}}) \int_{-\infty}^{\infty} \frac{e^{mx}}{1+e^{nx}}dx = -\frac{2\pi i}{n} e^{i\frac{\pi m}{n}}
$$

$$
\int_{-\infty}^{\infty} \frac{e^{mx}}{1+e^{nx}}dx = -\frac{2\pi i}{n} \frac{e^{i\frac{\pi m}{n}}}{1 - e^{i\frac{2\pi m}{n}}} = \frac{2\pi i}{n} \frac{e^{i\frac{\pi m}{n}}}{e^{i\frac{2\pi m}{n}} - 1} = \frac{2\pi i}{n} \frac{1}{e^{i\frac{\pi m}{n}} - e^{-i\frac{\pi m}{n}}} = \frac{2\pi i}{n} \frac{1}{2i \sin(\frac{\pi m}{n})} = \frac{\pi}{n \sin(\frac{\pi m}{n})}
$$
