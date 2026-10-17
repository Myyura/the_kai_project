---
sidebar_label: "2017年8月実施 専門部門 問題4（制御工学）"
tags:
  - Nagoya-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
  - Electrical-Electronic.Control-Theory.Step-Response
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

**問題4.**

**(1)** 伝達関数

$$
P(s)=\frac1{s+1},\quad K(s)=\frac{K_ps+K_i}{s},\quad F(s),\quad
M_1(s)=\frac1{s+1},\quad M_2(s)=\frac1{(s+1)^2}
$$

から成る図1のフィードバック制御系を考える。$R(s),D(s),Y(s)$ はそれぞれ目標値，外乱，制御量である。以下の問いに答えよ。

![図1 外乱とフィードフォワードを含む制御系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_4_original_figure_1.png)

**1)** $R(s)=0$ とする。$F(s)=1,\ F(s)=\dfrac{10}{s+10}$ それぞれの場合に対して，$D(s)$ から $Y(s)$ までの伝達関数が安定になるような $K_p,K_i$ の範囲を $(K_p,K_i)$ 平面にそれぞれ図示せよ。

**2)** $F(s)=1,D(s)=0,K_p=1,K_i=1$ とする。このとき，$R(s)$ から $Y(s)$ までの伝達関数を求めよ。

**3)** 小問2)で得られた伝達関数に対し，目標値 $R(s)$ が時間領域で単位ステップ関数であるときの制御量 $Y(s)$ の時間応答 $y(t)$ を求めよ。

**(2)** 伝達関数 $P(s)=\dfrac1{(s+1)^2(s+3)},K(s)$ から成る図2のフィードバック制御系を考える。$R(s),Y(s)$ はそれぞれ目標値，制御量である。以下の問いに答えよ。

![図2 単位負帰還制御系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_4_original_figure_2.png)

**1)** $P(s)$ の入出力関係を $Y(s)=P(s)U(s)$ とする。入力に正弦波 $u(t)=\sin(\sqrt3\,t)$ を印加して十分時間がたったとき，出力 $y(t)$ がどのような信号になるか説明せよ。

**2)** $K(s)=30$ とする。このとき，一巡伝達関数のボード線図の概形を折れ線近似を用いて描け。ただし，ゲイン線図，位相線図が折れ曲がる角周波数，ゲイン線図の傾きを明記せよ。さらに，ゲイン線図，位相線図の傾きが0となる周波数帯域ではゲイン，位相の値をそれぞれ明記せよ。

**3)** $K(s)=k$ とする。図2のフィードバック制御系のゲイン余裕が2となる $k$ を求めよ。

#### 题目描述

**问题4.**

**(1)** 考虑图1中由以下传递函数组成的反馈控制系统：

$$
P(s)=\frac1{s+1},\quad K(s)=\frac{K_ps+K_i}{s},\quad F(s),\quad
M_1(s)=\frac1{s+1},\quad M_2(s)=\frac1{(s+1)^2}.
$$

$R(s),D(s),Y(s)$ 分别为目标值、扰动和被控量。回答下列问题。

**1)** 令 $R(s)=0$。分别对 $F(s)=1$ 和 $F(s)=\dfrac{10}{s+10}$ 两种情况，在 $(K_p,K_i)$ 平面画出使从 $D(s)$ 到 $Y(s)$ 的传递函数稳定的 $K_p,K_i$ 的范围。

**2)** 令 $F(s)=1,D(s)=0,K_p=1,K_i=1$，求从 $R(s)$ 到 $Y(s)$ 的传递函数。

**3)** 对第2)问得到的传递函数，当目标值 $R(s)$ 在时域中为单位阶跃函数时，求被控量 $Y(s)$ 的时间响应 $y(t)$。

**(2)** 考虑图2中由传递函数 $P(s)=\dfrac1{(s+1)^2(s+3)},K(s)$ 构成的反馈控制系统。$R(s),Y(s)$ 分别为目标值和被控量。回答下列问题。

**1)** 设 $P(s)$ 的输入输出关系为 $Y(s)=P(s)U(s)$，输入正弦波 $u(t)=\sin(\sqrt3\,t)$ 并经过足够长时间后，说明输出 $y(t)$ 是怎样的信号。

**2)** 令 $K(s)=30$，用折线近似画出开环传递函数的伯德图概形。须注明增益图和相位图的转折角频率、增益图的斜率；此外，在增益图和相位图斜率为0的频段，分别注明增益和相位的值。

**3)** 令 $K(s)=k$，求使图2反馈控制系统的增益裕度等于2的 $k$。

## **Kai**

### (1)

#### 1)

$R=0$ とすると $Y=P(D-KFY)$ だから

$$
G_D=\frac{Y}{D}=\frac{P}{1+PKF}.
$$

**$F=1$ の場合**

$$
G_D=\frac{s}{s^2+(1+K_p)s+K_i}.
$$

$K_i\ne0$ では分子との約分がなく、二次のフルビッツ条件から $K_p>-1,K_i>0$。一方、$K_i=0$ では $K=K_p$ に退化し、

$$
G_D=\frac1{s+1+K_p}
$$

となる。従って問題文の「伝達関数が安定」を極の実部が負となる条件として解釈すると

$$
\boxed{K_p>-1,\qquad K_i\ge0}.
$$

**$F=10/(s+10)$ の場合**

$$
G_D=\frac{s(s+10)}{s^3+11s^2+10(1+K_p)s+10K_i}.
$$

三次のラウス表の第1列は

$$
1,\quad11,\quad\frac{110(1+K_p)-10K_i}{11},\quad10K_i.
$$

$K_i\ne0$ の安定条件は $0<K_i<11(1+K_p)$。$s=-10$ の約分が起きても、安定極の約分なのでこの条件は変わらない。$K_i=0$ では

$$
G_D=\frac{s+10}{s^2+11s+10(1+K_p)},
$$

従って求める範囲は

$$
\boxed{K_p>-1,\qquad0\le K_i<11(1+K_p)}.
$$

![伝達関数の安定領域。横軸の太線は含み、破線は含まない](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist4_stability.svg)

なお、約分前の特性多項式を厳密にフルビッツとする条件、あるいは積分器の状態を保持した実現の内部漸近安定性を求める場合には、両者とも $K_i=0$ を除く。境界の扱いはこの区別による。

#### 2), 3)

$K=(s+1)/s$ なので

$$
\frac YR=\frac{P(KM_2+M_1)}{1+PK}
=\boxed{\frac1{(s+1)^2}}.
$$

単位ステップ入力に対し

$$
Y(s)=\frac1{s(s+1)^2}=\frac1s-\frac1{s+1}-\frac1{(s+1)^2},
$$

$$
\boxed{y(t)=1-(1+t)e^{-t}\quad(t\ge0)}.
$$

### (2)

#### 1)

$\omega=\sqrt3$ で $|1+i\omega|=2$、$|3+i\omega|=2\sqrt3$、各偏角は $\pi/3,\pi/6$。従って

$$
\boxed{|P(i\sqrt3)|=\frac1{8\sqrt3}},\qquad
\boxed{\arg P(i\sqrt3)=-\frac{5\pi}{6}}.
$$

定常出力は $y_{\rm ss}(t)=(8\sqrt3)^{-1}\sin(\sqrt3t-5\pi/6)$。

#### 2)

$$
L(s)=\frac{30}{(s+1)^2(s+3)}=\frac{10}{(1+s)^2(1+s/3)}.
$$

ゲインの直線近似は

$$
G_{\rm dB}(\omega)\simeq
\begin{cases}
20,&\omega\le1,\\
20-40\log_{10}\omega,&1\le\omega\le3,\\
20-40\log_{10}\omega-20\log_{10}(\omega/3),&\omega\ge3.
\end{cases}
$$

位相は、一次遅れの折点の $1/10$ から 10 倍までを $-45^\circ$/dec で近似し、重ね合わせる。傾きは $\omega<0.1$ で 0、$0.1$–$0.3$ で $-90^\circ$/dec、$0.3$–$10$ で $-135^\circ$/dec、$10$–$30$ で $-45^\circ$/dec、$30$ 以上で 0。高周波の位相は $-270^\circ$ となる。

![開ループのボード線図。実線は厳密値、破線は直線近似](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist4_bode.svg)

#### 3)

分母を展開すると

$$
(1+i\omega)^2(3+i\omega)
=(3-5\omega^2)+i(7\omega-\omega^3).
$$

位相が $-\pi$ となる正の周波数は $\omega_{\rm pc}=\sqrt7$ で、分母は $-32$。従って $|P(i\sqrt7)|=1/32$ である。

$$
G_m=\frac{32}{k}=2\quad\Longrightarrow\quad\boxed{k=16}.
$$

参考に、正のゲインについて閉ループの安定限界は $k=32$ となる。

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 5ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
