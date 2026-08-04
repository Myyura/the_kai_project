---
sidebar_label: 2024年8月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Disturbance-Rejection
  - Electrical-Electronic.Control-Theory.Proportional-Integral-Derivative-and-Integral-Proportional-Derivative-Control
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 専門科目 制御工学

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/discovery/item/68880791000000002400ebc8?source=webshare&xhsshare=pc_web&xsec_token=ABtHY7I1RxAUjhEZPeviabm0pv0fqbvsAIkZhlNLqpKyQ=)

## **Description**
### 問題1
図1のフィードバック制御系に関する以下の設問に答えよ。ただし，

$$
P(s) = \frac{1}{s^2 + 2s - 8}, \quad F(s) = \frac{a}{s + 1}
$$

とし，$a, K$ は定数パラメータとする。

(1) $P(s)$ のステップ応答を求めよ。

(2) $r$ から $y$ への伝達関数 $G_{yr}(s)$ と $d$ から $y$ への伝達関数 $G_{yd}(s)$ をそれぞれ求めよ。

(3) $G_{yr}(s), G_{yd}(s)$ がともに安定なとき，$c$ を定数パラメータとして，ステップ入力 $d(t) = c$ と単位ステップ入力 $r(t) = 1$ を同時に加えると，出力 $y(t)$ の定常値 $\lim_{t \to \infty} y(t)$ が $2$ であった。このとき，$c$ の値を $a, K$ を用いて表せ。

(4) $a, K$ を実数の範囲で自由に選べるとして，$G_{yr}(s)$ のすべての極の実部が正になる $a, K$ が存在するか否か，理由とともに述べよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p1.png" width="350" alt=""/>
</figure>

### 問題2
図2に示す内部安定なフィードバック制御系について、以下の設問に答えよ。
なお、制御対象 $P(s)$ は最小位相で、その定常ゲイン $P(0)$ は正の定数とする。
また、$C(s)$ は次式で与えられる PID 制御器であり、比例ゲイン $K_P$、積分時間 $T_I$、微分時間 $T_D$ はすべて正の定数とする。

$$
C(s) = K_P \left( 1 + \frac{1}{T_I s} + T_D s \right)
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_1.png" width="250" alt=""/>
</figure>

(1) PID 制御器 $C(s)$ を設計したところ、一巡伝達関数のボード線図が図3のようになった。ゲイン余裕および位相余裕を図から読みとって答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_2.png" width="400" alt=""/>
</figure>

(2) 設問 (1) の PID 制御器の比例ゲイン $K_P$ のみを調整して、ゲイン余裕を 10 dB だけ大きくしたい。$K_P$ を何倍にすればよいか答えよ。

(3) 設問 (1) の PID 制御器を用いたところ、設定値 $r$ をステップ状に変更した直後に操作量 $u$ が急激に変動することが判明した。
この変動を抑制するために、図4に示す I-PD 制御系を採用することにした。
ただし、$K_P$, $T_I$, $T_D$ の値は設問 (1) の PID 制御器と同じ値とする。
PID 制御と比較して、操作量の急激な変動を抑制するために I-PD 制御が有効であると期待できる理由を簡潔に説明せよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_3.png" width="300" alt=""/>
</figure>

(4) 図4の I-PD 制御系について、外乱 $d$ から制御量 $y$ への閉ループ伝達関数を求めよ。さらに、PID 制御と I-PD 制御で同じ制御パラメータ $K_P$, $T_I$, $T_D$ を用いる場合について、求めた閉ループ伝達関数が、図2の PID 制御系の外乱 $d$ から制御量 $y$ への閉ループ伝達関数と同じになるかどうかを理由とともに答えよ。

### 题目描述

1. 对图 1 所示反馈控制系统，设

   $$
   P(s)=\frac1{s^2+2s-8},\qquad
   F(s)=\frac a{s+1},
   $$

   其中 $a,K$ 为常数参数。

   （1）求 $P(s)$ 的阶跃响应。

   （2）分别求从 $r$ 到 $y$ 的传递函数 $G_{yr}(s)$，以及从扰动 $d$ 到 $y$ 的传递函数 $G_{yd}(s)$。

   （3）假设 $G_{yr}(s),G_{yd}(s)$ 都稳定。同时施加阶跃扰动 $d(t)=c$ 和单位阶跃参考输入 $r(t)=1$，其中 $c$ 为常数参数；若输出稳态值满足

   $$
   \lim_{t\to\infty}y(t)=2,
   $$

   用 $a,K$ 表示 $c$。

   （4）允许在实数范围内自由选择 $a,K$。判断是否存在某组 $a,K$，使 $G_{yr}(s)$ 的所有极点实部都为正，并说明理由。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p1.png" width="350" alt=""/>
   </figure>

2. 考虑图 2 所示内部稳定的反馈控制系统。对象 $P(s)$ 为最小相位系统，且其稳态增益 $P(0)$ 为正常数。控制器为 PID 控制器

   $$
   C(s)=K_P\left(1+\frac1{T_Is}+T_Ds\right),
   $$

   其中比例增益 $K_P$、积分时间 $T_I$、微分时间 $T_D$ 均为正常数。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_1.png" width="250" alt=""/>
   </figure>

   （1）设计 PID 控制器后，开环传递函数的 Bode 图如图 3。由图读出增益裕度和相位裕度。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_2.png" width="400" alt=""/>
   </figure>

   （2）仅调整第（1）问 PID 控制器的比例增益 $K_P$，使增益裕度增加 $10\,\mathrm{dB}$。求 $K_P$ 应变为原来的多少倍。

   （3）使用第（1）问的 PID 控制器时，发现参考值 $r$ 发生阶跃变化后，操作量 $u$ 会立即剧烈变化。为抑制该变化，改用图 4 的 I-PD 控制结构，且 $K_P,T_I,T_D$ 与原 PID 控制器相同。简要说明相较 PID 控制，为什么 I-PD 有望抑制操作量的突然变化。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_3.png" width="300" alt=""/>
   </figure>

   （4）对图 4 的 I-PD 系统，求从扰动 $d$ 到被控量 $y$ 的闭环传递函数。若 PID 与 I-PD 使用相同的 $K_P,T_I,T_D$，判断该传递函数是否与图 2 PID 系统从 $d$ 到 $y$ 的闭环传递函数相同，并说明理由。

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>
