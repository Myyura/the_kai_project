---
sidebar_label: "2022年度 統計学・計量経済学 第2題 3"
tags:
  - Hitotsubashi-University
  - Business-Administration.Finance.One-Period-Binomial-Model-and-State-Prices
  - Business-Administration.Finance.Put-Call-Parity
  - Business-Administration.Finance.Market-Price-of-Risk
---
# 一橋大学 経済学研究科 2022年度 統計学・計量経済学 第2題 3

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の (a) から (e) のすべてに答えよ。導出過程は省略しないこと。

次の1期間二項モデルを考える。時点0では $S_0=100, B_0=1$ である。

| 状態 | 確率 | $S_1$ | $B_1$ |
|---|---:|---:|---:|
| $\omega_1$ | $1/2$ | $140$ | $R$ |
| $\omega_2$ | $1/2$ | $90$ | $R$ |

### (a)

$R=1.4$ のとき、裁定機会が存在することを示せ。

### (b)

以下では $R=1.1$ とする。各状態の状態価格を求めよ。

### (c)

(b)の結果を用いて、時点1を満期とするアット・ザ・マネーの
コール・オプションとプット・オプションの現在価値を求めよ。

### (d)

(c)においてプット・コール・パリティが成立することを確認せよ。

### (e)

利得関数を $g$ とする派生証券を考える。$g$ が狭義単調増加ならば、
原証券と派生証券のリスクの市場価格が一致することを示せ。

## **Kai**

### (a)

安全証券を100単位買い、株式を1単位空売りする。初期費用は $100-100=0$、
満期利得は

$$
100R-S_1=140-S_1=
\begin{cases}
0,&\omega_1,\\
50,&\omega_2.
\end{cases}
$$

よって裁定機会である。

### (b)

状態価格を $q_1,q_2$ とする。安全証券と株式の価格より

$$
1=1.1(q_1+q_2),\qquad
100=140q_1+90q_2.
$$

したがって

$$
\boxed{q_1=\frac4{11},\qquad q_2=\frac6{11}}.
$$

### (c)

行使価格は $K=S_0=100$ である。コールの利得は $(40,0)$、
プットの利得は $(0,10)$ なので

$$
\boxed{C_0=40q_1=\frac{160}{11}},\qquad
\boxed{P_0=10q_2=\frac{60}{11}}.
$$

### (d)

$$
C_0-P_0=\frac{100}{11}
=100-\frac{100}{1.1}
=S_0-\frac KR.
$$

よってプット・コール・パリティが成立する。

### (e)

価格 $Z_0$、満期価値 $Z_1$ の証券について

$$
\lambda(Z)=\frac{E[Z_1]-RZ_0}{\operatorname{sd}(Z_1)}
$$

とおく。$g_u=g(140),\ g_d=g(90)$ とする。2状態だけなので

$$
g(S_1)=a+bS_1,\qquad b=\frac{g_u-g_d}{50}>0
$$

と書ける。この派生証券の価格を $G_0$ とすると、複製価格は

$$
G_0=\frac aR+bS_0.
$$

したがって

$$
E[g(S_1)]-RG_0=b\{E[S_1]-RS_0\},\qquad
\operatorname{sd}(g(S_1))=b\operatorname{sd}(S_1).
$$

ゆえに

$$
\frac{E[g(S_1)]-RG_0}{\operatorname{sd}(g(S_1))}
=\frac{E[S_1]-RS_0}{\operatorname{sd}(S_1)}
=\frac{115-110}{25}=\boxed{\frac15}.
$$

両者のリスクの市場価格は一致する。

## **Reference**

- [一橋大学 経済学研究科 過去の入試問題](https://www.econ.hit-u.ac.jp/jpn/page/examinee/graduate_admissions/past_exam.html)
- [一橋大学 2022年度修士課程入学試験「経済学」](https://www1.econ.hit-u.ac.jp/office/bosyu/kakomon/kakomon_s2022.pdf)
