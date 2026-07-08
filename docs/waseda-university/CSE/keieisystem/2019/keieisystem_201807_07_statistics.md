---
sidebar_label: "2018年7月実施 統計科学 問題7"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-and-Statistics-Basics.Conditional-Probability
  - Probability-Statistics.Statistical-Inference.Maximum-Likelihood-Estimation
  - Probability-Statistics.Statistical-Inference.Orthogonal-Array
  - Probability-Statistics.Statistical-Inference.Multiple-Regression
  - Probability-Statistics.Statistical-Inference.Regression-Diagnostics
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 統計科学 問題7

## **Author**
祭音Myyura

## **Description**

1. $V(X)=V(Y)=V(Z)=4$、$C(X,Y)=0$、$C(X,Z)=1$、$C(Y,Z)=3$ とする。$S=X+Y$、$T=X-Y$、$W=X+2Y-Z$ に対し、$V(S),V(T),V(W),C(S,T)$ を求めよ。
2. 独立な $X_i$ の密度が

   $$
   f(x;\theta)=\frac16\theta^4x^3e^{-\theta x},\qquad x>0
   $$

   であるとき、$\theta$ の最尤推定量を求めよ。
3. 病気 K の有病率は0.01、感度は0.95、非感染者の偽陽性率は0.20である。陽性者が実際に感染している確率を求めよ。
4. 4因子 A、B、C、D を各2水準とし、$L_8$ 直交配列表で実験した。交互作用は $A\times B$ と $A\times C$ のみ考える。A1 のデータ合計が14、A2 が10である。
   1. A の平方和を求めよ。
   2. A の自由度を求めよ。
   3. 総自由度を求めよ。
   4. $A\times C$ のみを誤差へプーリングした後の誤差自由度を求めよ。
5. 重回帰分析における残差とテコ比を説明せよ。

## **Kai**

### [小問 1]

分散・共分散の双線形性より

$$
\begin{aligned}
V(S)&=4+4+2(0)=\boxed8,\\
V(T)&=4+4-2(0)=\boxed8,\\
V(W)&=4+4(4)+4+2\{2(0)-1-2(3)\}=\boxed{10},\\
C(S,T)&=C(X+Y,X-Y)=V(X)-V(Y)=\boxed0.
\end{aligned}
$$

### [小問 2]

尤度と対数尤度は

$$
L(\theta)=6^{-n}\theta^{4n}\left(\prod_i x_i^3\right)
e^{-\theta\sum_i x_i},
$$

$$
\ell(\theta)=\text{const.}+4n\log\theta-\theta\sum_i x_i.
$$

したがって

$$
\ell'(\theta)=\frac{4n}{\theta}-\sum_i x_i=0
$$

より

$$
\boxed{\hat\theta_{\mathrm{ML}}=\frac{4n}{\sum_iX_i}=\frac4{\bar X}}.
$$

第2微分は $-4n/\theta^2<0$ なので最大である。

### [小問 3]

ベイズの定理より

$$
\begin{aligned}
P(K\mid+)
&=\frac{P(+\mid K)P(K)}
{P(+\mid K)P(K)+P(+\mid K^c)P(K^c)}\\
&=\frac{0.95\cdot0.01}{0.95\cdot0.01+0.20\cdot0.99}\\
&=\boxed{\frac{19}{415}\approx0.0458}.
\end{aligned}
$$

### [小問 4]

全8回の実験の総和は $T=14+10=24$ であり、各水準は4回ずつ現れる。

$$
SS_A=\frac{14^2}{4}+\frac{10^2}{4}-\frac{24^2}{8}
=49+25-72=\boxed2.
$$

2水準因子なので

$$
\boxed{\operatorname{df}(A)=1}.
$$

総自由度は

$$
\boxed{8-1=7}.
$$

A、B、C、D、$A\times B$、$A\times C$ が各1自由度を使うため、当初の誤差自由度は $7-6=1$ である。$A\times C$ の1自由度を誤差へ加えると

$$
\boxed{\operatorname{df}(E_{\mathrm{pooled}})=2}.
$$

### [小問 5]

残差は観測値と当てはめ値の差

$$
e_i=y_i-\hat y_i
$$

であり、モデルが説明できなかった変動を表す。残差プロットは線形性、等分散性、外れ値などの診断に用いる。

テコ比はハット行列

$$
H=X(X^{\mathsf T}X)^{-1}X^{\mathsf T}
$$

の対角要素 $h_{ii}$ で、説明変数空間において観測 $i$ が中心からどれだけ離れているか、また $y_i$ が自分自身の当てはめ値へどれだけ影響するかを表す。高テコ比点は残差が大きいとは限らないが、残差も大きければ回帰結果への影響が強い可能性がある。
