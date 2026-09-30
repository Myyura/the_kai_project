---
sidebar_label: "2014年8月実施 機械力学 2"
tags:
  - Kyoto-University
  - Physics.Mechanics.String-Vibration
  - Mathematics.Differential-Equations.Wave-Equation
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 京都大学 工学研究科 機械工学群 2014年8月実施 機械力学 2

## **Author**
祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

[原問題（平成27年度、大学公式PDFの保存版、3–4ページ）](https://web.archive.org/web/20160619031705id_/http://www.me.t.kyoto-u.ac.jp:80/ja/admission/exam/body/past_problems/files/H27_kikairikigaku)

線密度 $\rho$、長さ $L$ の柔軟で一様な弦を、一定張力 $T$ で $x$ 軸に沿って張り、両端を固定する。弦は $xy$ 平面内で微小振動し、位置 $x$、時刻 $t$ の横変位を $y(x,t)$ とする。

![固定弦、微小区間の張力と倍音による共鳴](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/other/kyoto-2015-string.svg)

- **2-1**：微小区間 $[x,x+dx]$ の左右の端に働く力の $y$ 成分をそれぞれ求めよ。
- **2-2**：運動方程式を導き、$y_{tt}=c^2y_{xx}$ の形にせよ。また、正の定数 $c$ を求めよ。
- **2-3 (1)**：非自明な解 $y=(P\cos\alpha x+Q\sin\alpha x)(R\cos c\alpha t+S\sin c\alpha t)$ が境界条件を満たすように、$P,\alpha$ を定めよ。
- **2-3 (2)**：解の重ね合わせにより、弦の振動を表す一般式を求めよ。
- **2-4**：ピアノでは、鍵を押すとハンマーが対応する弦を打つ。ある鍵を弾くと、その1オクターブ上の鍵に対応する弦も振動し始めた。1オクターブ上では基本振動数が2倍になることを用いて、この現象を説明せよ。

#### 题目描述

线密度 $\rho$、长度 $L$ 的均匀柔弦以恒张力 $T$ 沿 $x$ 轴张紧，两端固定，在 $xy$ 平面内作微振动，横向位移为 $y(x,t)$。求微段左右两端张力的 $y$ 分量，导出波动方程及波速 $c$；将给定分离变量解代入固定端边界条件，求 $P$ 与 $\alpha$，再写出叠加得到的一般解。最后解释钢琴敲击一个琴键后，高一个八度所对应的弦也开始振动的原因；高八度的基频为原基频的两倍。

## **Kai**

### 2-1・2-2

弦の接線と $x$ 軸の角を $\theta(x,t)$ とする。微小振動では $\sin\theta\simeq\theta\simeq y_x$ なので

$$
\boxed{F_{y,\mathrm L}=-Ty_x(x,t)},\qquad
\boxed{F_{y,\mathrm R}=Ty_x(x+dx,t)
\simeq T(y_x+y_{xx}dx)}.
$$

微小区間の質量は $\rho\,dx$。運動方程式は

$$
\rho\,dx\,y_{tt}=F_{y,\mathrm L}+F_{y,\mathrm R}=Ty_{xx}\,dx.
$$

よって

$$
\boxed{y_{tt}=\frac{T}{\rho}y_{xx}=c^2y_{xx}},\qquad
\boxed{c=\sqrt{\frac{T}{\rho}}}.
$$

### 2-3 (1)

$y(0,t)=0$ より $P=0$。非自明な解について $y(L,t)=0$ より $\sin\alpha L=0$ である。正の波数を選べば

$$
\boxed{P=0,\qquad \alpha_n=\frac{n\pi}{L}\quad(n=1,2,\ldots)}.
$$

### 2-3 (2)

$$
\boxed{y(x,t)=\sum_{n=1}^{\infty}
\left[A_n\cos\left(\frac{cn\pi t}{L}\right)
+B_n\sin\left(\frac{cn\pi t}{L}\right)\right]
\sin\left(\frac{n\pi x}{L}\right)}.
$$

$A_n,B_n$ は初期条件で定まる。$y(x,0)=f(x)$、$y_t(x,0)=g(x)$ なら、正弦関数の直交性より

$$
A_n=\frac2L\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx,
\qquad
B_n=\frac2{cn\pi}\int_0^L g(x)\sin\frac{n\pi x}{L}\,dx.
$$

### 2-4

弦の固有振動数は $f_n=nc/(2L)$。打撃された弦の振動には基音 $f_1$ とともに第2倍音 $2f_1$ が含まれる。この成分が響板や空気を介して他の弦に伝わると、基本振動数が $2f_1$ の1オクターブ上の弦が共鳴する。

## **Reference**

- [SN の解答・解説](https://bloodystream.hatenadiary.jp/entry/2021/05/06/203000)
