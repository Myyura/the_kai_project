---
sidebar_label: "2013年度入学 数学 問4（複素関数論）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Contour-Integration
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2013年度入学 数学 問4（複素関数論）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

図に示す反時計回りの閉曲線 $C = C_1 + C_2 + C_3$ に沿った複素積分 $\oint_C e^{iz^2} dz$ を考える.
$C_1, C_2, C_3$ はそれぞれ $z = x$ ( $0 \leq x \leq R$ ), $z = Re^{i\theta}$ ( $0 \leq \theta \leq \pi/4$ ), $z = re^{i\pi/4}$ ( $r$ は $R$ から $0$ まで) と表される. 次の各問に答えよ.

(1) $\oint_C e^{iz^2} dz$ の値を求めよ.

(2) $\lim_{R \to \infty} \int_{C_3} e^{iz^2} dz$ の値を求めよ. $\int_0^\infty e^{-x^2} dx = \sqrt{\pi}/2$ を用いて良い.

(3) $\lim_{R \to \infty} \int_{C_2} e^{iz^2} dz$ の値を求めよ. $\sin 2\theta \geq 4\theta/\pi$ ( $0 \leq \theta \leq \pi/4$ ) を用いて良い.

(4) $\int_0^\infty \cos x^2 dx = \int_0^\infty \sin x^2 dx = \frac{\sqrt{\pi}}{2\sqrt{2}}$ が成り立つことを示せ.

> 出典：九州大学[平成25年度公式問題（保存版、PDF 6ページ）](https://web.archive.org/web/20180413175215id_/http://www.isee.kyushu-u.ac.jp:80/script/wordpress/wp-content/uploads/H25infait.pdf#page=6)。

![積分路 C1、C2、C3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu/2013/kyushu-2013-fresnel-contour.svg)

### 题目描述

取由三段曲线组成并按逆时针方向围成扇形的闭路

$$
C=C_1+C_2+C_3,
$$

其中

$$
\begin{aligned}
C_1&:\ z=x,\quad 0\le x\le R,\\
C_2&:\ z=Re^{i\theta},\quad 0\le\theta\le\frac{\pi}{4},\\
C_3&:\ z=re^{i\pi/4},\quad r\ \text{从 }R\text{ 减小到 }0.
\end{aligned}
$$

也就是说，$C_1$ 是从原点沿正实轴到 $R$ 的线段，$C_2$ 是半径为 $R$、圆心角为 $\pi/4$ 的圆弧，$C_3$ 沿辐角 $\pi/4$ 的射线返回原点。围绕积分

$$
\oint_C e^{iz^2}\,dz
$$

回答下列问题：

1. 求该闭路积分的值。
2. 求

   $$
   \lim_{R\to\infty}\int_{C_3}e^{iz^2}\,dz,
   $$

   可以使用 $\int_0^\infty e^{-x^2}\,dx=\sqrt{\pi}/2$。
3. 求

   $$
   \lim_{R\to\infty}\int_{C_2}e^{iz^2}\,dz,
   $$

   可以使用不等式

   $$
   \sin2\theta\ge\frac{4\theta}{\pi}
   \qquad\left(0\le\theta\le\frac{\pi}{4}\right).
   $$

4. 证明菲涅耳积分

   $$
   \int_0^\infty\cos x^2\,dx
   =\int_0^\infty\sin x^2\,dx
   =\frac{\sqrt{\pi}}{2\sqrt2}.
   $$

## **Kai**

解答

(1) $\oint_C e^{iz^2} dz$ の値

被積分関数 $f(z) = e^{iz^2}$ は複素平面全体で正則（整関数）である. 積分路 $C$ は単純閉曲線であるため, コーシーの積分定理により, 閉曲線 $C$ に沿った積分は 0 となる.

$$
\oint_C e^{iz^2} dz = 0
$$

(2) $\lim_{R \to \infty} \int_{C_3} e^{iz^2} dz$ の値

積分路 $C_3$ は, $z = re^{i\pi/4}$ とパラメータ表示され, $r$ は $R$ から $0$ へと動く.
$dz = e^{i\pi/4} dr$ であり, $z^2 = (re^{i\pi/4})^2 = r^2 e^{i\pi/2} = r^2 i$ となる.
したがって, $iz^2 = i(ir^2) = -r^2$ となる.

積分を計算すると,

$$
\int_{C_3} e^{iz^2} dz = \int_R^0 e^{-r^2} (e^{i\pi/4} dr) = -e^{i\pi/4} \int_0^R e^{-r^2} dr
$$

$R \to \infty$ の極限をとると, 与えられたガウス積分の公式 $\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$ を用いて,

$$
\lim_{R \to \infty} \int_{C_3} e^{iz^2} dz = -e^{i\pi/4} \int_0^\infty e^{-r^2} dr = -e^{i\pi/4} \frac{\sqrt{\pi}}{2}
$$

ここで, $e^{i\pi/4} = \cos(\frac{\pi}{4}) + i\sin(\frac{\pi}{4}) = \frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} = \frac{1+i}{\sqrt{2}}$ であるから,

$$
\lim_{R \to \infty} \int_{C_3} e^{iz^2} dz = -\left(\frac{1+i}{\sqrt{2}}\right) \frac{\sqrt{\pi}}{2} = -\frac{\sqrt{\pi}}{2\sqrt{2}}(1+i)
$$

(3) $\lim_{R \to \infty} \int_{C_2} e^{iz^2} dz$ の値

積分路 $C_2$ は, $z = Re^{i\theta}$ とパラメータ表示され, $\theta$ は $0$ から $\pi/4$ へと動く.
$dz = iRe^{i\theta} d\theta$ であり, $z^2 = (Re^{i\theta})^2 = R^2 e^{i2\theta}$ となる.
したがって, $iz^2 = iR^2 e^{i2\theta} = iR^2(\cos(2\theta) + i\sin(2\theta)) = -R^2\sin(2\theta) + iR^2\cos(2\theta)$ となる.

積分の絶対値を評価すると,

$$
\left| \int_{C_2} e^{iz^2} dz \right| = \left| \int_0^{\pi/4} e^{-R^2\sin(2\theta) + iR^2\cos(2\theta)} iRe^{i\theta} d\theta \right| \leq \int_0^{\pi/4} \left| e^{-R^2\sin(2\theta)} \right| \left| e^{iR^2\cos(2\theta)} \right| \left| iRe^{i\theta} \right| d\theta
$$

$$
= \int_0^{\pi/4} e^{-R^2\sin(2\theta)} R d\theta
$$

ここで, 与えられた不等式 $\sin(2\theta) \geq \frac{4\theta}{\pi}$ ( $0 \leq \theta \leq \pi/4$ ) を用いると, $e^{-R^2\sin(2\theta)} \leq e^{-R^2(4\theta/\pi)}$ となる. よって,

$$
\left| \int_{C_2} e^{iz^2} dz \right| \leq \int_0^{\pi/4} R e^{-4R^2\theta/\pi} d\theta = R \left[ \frac{e^{-4R^2\theta/\pi}}{-4R^2/\pi} \right]_0^{\pi/4}
$$

$$
= R \left( -\frac{\pi}{4R^2} \right) (e^{-4R^2(\pi/4)/\pi} - e^0) = -\frac{\pi}{4R} (e^{-R^2} - 1) = \frac{\pi}{4R}(1-e^{-R^2})
$$

$R \to \infty$ の極限をとると,

$$
\lim_{R \to \infty} \frac{\pi}{4R}(1-e^{-R^2}) = 0
$$

したがって, はさみうちの原理により,

$$
\lim_{R \to \infty} \int_{C_2} e^{iz^2} dz = 0
$$

(4) $\int_0^\infty \cos x^2 dx = \int_0^\infty \sin x^2 dx = \frac{\sqrt{\pi}}{2\sqrt{2}}$ の証明

(1) の結果から, $\oint_C e^{iz^2} dz = \int_{C_1} e^{iz^2} dz + \int_{C_2} e^{iz^2} dz + \int_{C_3} e^{iz^2} dz = 0$ である.
$R \to \infty$ の極限をとると,

$$
\lim_{R \to \infty} \int_{C_1} e^{iz^2} dz + \lim_{R \to \infty} \int_{C_2} e^{iz^2} dz + \lim_{R \to \infty} \int_{C_3} e^{iz^2} dz = 0
$$

積分路 $C_1$ 上では $z=x$ ( $0 \leq x \leq R$ ), $dz=dx$ なので,

$$
\int_{C_1} e^{iz^2} dz = \int_0^R e^{ix^2} dx = \int_0^R (\cos(x^2) + i\sin(x^2)) dx
$$

$$
\lim_{R \to \infty} \int_{C_1} e^{iz^2} dz = \int_0^\infty \cos(x^2) dx + i \int_0^\infty \sin(x^2) dx
$$

(2), (3) の結果を代入すると,

$$
\left(\int_0^\infty \cos x^2 dx + i \int_0^\infty \sin x^2 dx\right) + 0 + \left(-\frac{\sqrt{\pi}}{2\sqrt{2}}(1+i)\right) = 0
$$

移項して,

$$
\int_0^\infty \cos x^2 dx + i \int_0^\infty \sin x^2 dx = \frac{\sqrt{\pi}}{2\sqrt{2}}(1+i) = \frac{\sqrt{\pi}}{2\sqrt{2}} + i \frac{\sqrt{\pi}}{2\sqrt{2}}
$$

両辺の実部と虚部を比較することにより,

$$
\int_0^\infty \cos x^2 dx = \frac{\sqrt{\pi}}{2\sqrt{2}}
$$

$$
\int_0^\infty \sin x^2 dx = \frac{\sqrt{\pi}}{2\sqrt{2}}
$$

が示された.
