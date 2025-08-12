---
sidebar_label: "2023年8月実施 専門科目 制御工学"
tags:
  - Kyoto-University
  - Control-Theory
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 専門科目 制御工学

## **Author**
[AKIRA, 小红书:94184092292](https://www.xiaohongshu.com/explore/6886bd03000000001c037b60?xsec_token=ABXXWhvejfYWQlWP3FzACDNopVSP5JX2VOuz0nVyWitaE=)

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


## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>


