---
sidebar_label: 2023年8月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 専門科目 制御工学

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6886bd03000000001c037b60?xsec_token=ABXXWhvejfYWQlWP3FzACDNopVSP5JX2VOuz0nVyWitaE=)

## **Description**
### 問題1
図1のブロック線図と図2のフィードバック制御系に関する以下の設問に答えよ．ただし，$a, b, K$ は定数パラメータとする．

(1) 図1のブロック線図において $r$ から $y$ への伝達関数を求めよ．

(2) 設問 (1) で求めた伝達関数のステップ応答を求めよ．

(3) 図2のフィードバック制御系が安定となる $a, b, K$ の条件を求めよ．

(4) 図2のフィードバック制御系が安定なとき，ランプ入力 $r(t) = t$ に対する出力 $y(t)$ の定常偏差 $\lim_{t\to\infty} (r(t) - y(t))$ を，$a, b, K$ を用いて表わせ．

(5) 図2のフィードバック制御系において $a = 1, b = 3, -\infty < K < +\infty$ とする．フィードバック制御系の極のうち実部が正のものの個数を答えよ．ただし，重複する極の個数は重複度に等しいとして数える．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p1.png" width="500" alt=""/>
</figure>

---

### 問題2
伝達関数

$$
G(s) = \frac{s + a}{s(s + 1)}
$$

について考える．ただし，$a$ は $1$ 未満の正の定数パラメータである．以下の設問に答えよ．

(1) $G(s)$ のゲイン線図の折れ線近似を描け．

(2) 図3のフィードバック制御系の位相余裕が $2\pi/3 \ \mathrm{rad}$ 以上となる $a$ の条件を求めよ．

(3) $G(s)$ のゲイン線図がその折れ線近似と交差する周波数を求めよ．

以下，$H(s)$ は $G(s)$ と同じゲインを持つ伝達関数であるとする．

(4) このような $H(s)$ のうち，$G(s)$ 以外の伝達関数をひとつ挙げよ．

(5) $H(s)$ に正弦波 $\sin t$ を入力したとする．十分時間が経ったとき，出力の正弦波の振幅が $5/7$ であったとする．このような $a$ を求めよ．

(6) 設問 (5) において，$H(s)$ の出力が入力と同位相，つまり，位相が $2n\pi$（$n$ は整数）であったとする．このような $H(s)$ のひとつを求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p2.png" width="200" alt=""/>
</figure>

### 题目描述

1. 回答关于图 1 的方框图和图 2 的反馈控制系统的下列问题，其中 $a,b,K$ 为常数参数。

   （1）求图 1 中从 $r$ 到 $y$ 的传递函数。

   （2）求第（1）问所得传递函数的阶跃响应。

   （3）求使图 2 的反馈控制系统稳定的 $a,b,K$ 条件。

   （4）当图 2 的反馈控制系统稳定时，用 $a,b,K$ 表示斜坡输入 $r(t)=t$ 下输出的稳态误差

   $$
   \lim_{t\to\infty}\bigl(r(t)-y(t)\bigr).
   $$

   （5）在图 2 的反馈控制系统中令 $a=1,b=3$，并允许 $-\infty<K<+\infty$。求闭环极点中实部为正者的个数；重极点按其重数计数。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p1.png" width="500" alt=""/>
   </figure>

2. 考虑传递函数

   $$
   G(s)=\frac{s+a}{s(s+1)},
   $$

   其中 $a$ 是小于 1 的正常数。

   （1）画出 $G(s)$ 增益图的折线近似。

   （2）求使图 3 反馈控制系统的相位裕度至少为 $2\pi/3\ \mathrm{rad}$ 的 $a$ 的条件。

   （3）求 $G(s)$ 的精确增益曲线与其折线近似相交的频率。

   以下设 $H(s)$ 为与 $G(s)$ 具有相同增益的传递函数。

   （4）给出一个满足条件但不同于 $G(s)$ 的 $H(s)$。

   （5）向 $H(s)$ 输入正弦波 $\sin t$。充分长时间后，输出正弦波的振幅为 $5/7$。求满足此条件的 $a$。

   （6）在第（5）问中，进一步要求 $H(s)$ 的输出与输入同相，即相位为 $2n\pi$，其中 $n$ 为整数。求一个满足条件的 $H(s)$。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p2.png" width="200" alt=""/>
   </figure>

#### 考点

- **方框图化简与闭环传递函数**：组合串并联及反馈环节，得到参考输入到输出的等效模型。
- **阶跃响应、稳态误差与系统型别**：由极点和低频增益分析瞬态及斜坡跟踪误差。
- **Routh–Hurwitz 判据**：判断参数化闭环特征多项式的稳定性及右半平面极点数。
- **Bode 增益折线与相位裕度**：识别零极点拐点、求精确曲线交点并施加裕度约束。
- **全通因子与同幅异相系统**：构造具有相同幅频响应的不同传递函数，并按相位要求选取因子。


## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>
