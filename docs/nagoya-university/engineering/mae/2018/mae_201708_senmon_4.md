---
sidebar_label: "2018年度 専門部門 問題4（制御工学）"
tags:
  - Nagoya-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
  - Electrical-Electronic.Control-Theory.Step-Response
---

# 名古屋大学 工学研究科 機械航空系 2018年度 専門部門 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### (1)

図の制御系について、$R,D,Y$ は目標値、外乱、出力、$P$ はプラント、$K$ は制御器、$F$ はフィードバック要素である。信号の関係は

$$
U=K(M_2R-FY)+M_1R+D,\qquad Y=PU
$$

であり、

$$
P=\frac1{s+1},\quad K=\frac{K_ps+K_i}{s},\quad
M_1=\frac1{s+1},\quad M_2=\frac1{(s+1)^2}.
$$

1. $R=0$ とする。$F=1$ および $F=10/(s+10)$ のそれぞれについて、$D$ から $Y$ までの伝達関数が安定になる $K_p,K_i$ の範囲を求め、図示せよ。
2. $F=1,D=0,K_p=K_i=1$ のとき、$R$ から $Y$ への伝達関数を求めよ。
3. 2) の系の単位ステップ応答を求めよ。

### (2)

プラント $P=1/[(s+1)^2(s+3)]$ に定数ゲイン $K$ を接続し、単位負帰還を行う。

1. プラント単体に $u(t)=\sin(\sqrt3t)$ を加えたときの定常応答の振幅と位相を求めよ。
2. $K=30$ のときの開ループ伝達関数のボード線図を直線近似で描け。
3. ゲイン余裕が 2 となる $K=k$ を求めよ。

![二つの制御系の信号関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist4_blocks.svg)

#### 题目描述

（1）系统满足 $U=K(M_2R-FY)+M_1R+D$、$Y=PU$，其中 $P=1/(s+1)$、$K=(K_ps+K_i)/s$、$M_1=1/(s+1)$、$M_2=1/(s+1)^2$。令 $R=0$，分别对 $F=1$ 与 $F=10/(s+10)$ 求外扰 $D$ 到输出 $Y$ 的传递函数稳定时的参数范围并作图。再令 $F=1,D=0,K_p=K_i=1$，求 $R$ 到 $Y$ 的传递函数和单位阶跃响应。（2）对 $P=1/[(s+1)^2(s+3)]$：求开环输入 $\sin(\sqrt3t)$ 时稳态输出的幅值和相位；串联 $K=30$ 时绘制开环频率响应的渐近波特图；单位负反馈下，求增益裕度为 2 的常数增益 $k$。

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

![伝達関数の安定領域。横軸の太線は含み、破線は含まない](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist4_stability.svg)

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

![開ループのボード線図。実線は厳密値、破線は直線近似](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist4_bode.svg)

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
