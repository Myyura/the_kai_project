---
sidebar_label: "2023年8月実施 午前 ⑦"
tags:
  - institute-of-science-tokyo
  - Chemistry.Physical-Chemistry.Consecutive-First-Order-Reaction-Kinetics
---
# 東京科学大学 生命理工学院 生命理工学系 2023年8月実施 午前 ⑦

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

⑦ 反応速度に関する以下の問に答えよ。

物質 A から生成物 B が生じ、それが分解して生成物 C が生じる。各ステップが1次反応であり、副生成物がなく、逆反応が無視できるとする。ただし、B と C の生成速度定数を $k_a$、$k_b$、A の初濃度を $[\mathrm A]_0$ とし、反応時刻 $t$ における A、B、C の濃度をそれぞれ $[\mathrm A]$、$[\mathrm B]$、$[\mathrm C]$ とする。温度、圧力は一定とする。

1) $[\mathrm A]_0$ を $[\mathrm A]$、$[\mathrm B]$、$[\mathrm C]$ をすべて用いた式で表せ。
2) A の濃度の時間変化を $k_a$ および $[\mathrm A]$ を用いて表せ。
3) B の濃度の時間変化を $[\mathrm A]$、$[\mathrm B]$、$k_a$、$k_b$ を用いて表せ。
4) この反応において $[\mathrm C]$ は、

   $$
   [\mathrm C]=\left\{1+\frac{\boxed{\text{ア}}}{k_b-k_a}\right\}[\mathrm A]_0
   $$

   と表すことができる。$k_a e^{-k_b t}$ と $k_b e^{-k_a t}$ を用いて、（ア）に当てはまる式を記せ。
5) 4) の関係があるとき、B の濃度が最大になる時刻 $t_{\max}$ を $k_a$ と $k_b$ を用いて表せ。

### 题目描述

⑦ 回答下列反应速率问题。

物质 A 生成产物 B，B 再分解生成产物 C。每一步均为一级反应，没有副产物，逆反应可以忽略。B、C 的生成速率常数分别为 $k_a$、$k_b$，A 的初始浓度为 $[\mathrm A]_0$；反应时刻 $t$ 的 A、B、C 浓度分别记为 $[\mathrm A]$、$[\mathrm B]$、$[\mathrm C]$。温度和压力保持不变。

1) 用 $[\mathrm A]$、$[\mathrm B]$、$[\mathrm C]$ 三者表示 $[\mathrm A]_0$。
2) 用 $k_a$ 和 $[\mathrm A]$ 表示 A 浓度的时间变化率。
3) 用 $[\mathrm A]$、$[\mathrm B]$、$k_a$、$k_b$ 表示 B 浓度的时间变化率。
4) 本反应的 $[\mathrm C]$ 可以表示为

   $$
   [\mathrm C]=\left\{1+\frac{\boxed{\text{ア}}}{k_b-k_a}\right\}[\mathrm A]_0.
   $$

   用 $k_a e^{-k_b t}$ 和 $k_b e^{-k_a t}$ 写出空格（ア）中的表达式。
5) 在 4) 的关系成立时，用 $k_a$、$k_b$ 表示 B 浓度达到最大值的时刻 $t_{\max}$。

## **Kai**

### 1)

$$
\boxed{[A]_0=[A]+[B]+[C]}.
$$

### 2)

$$
\boxed{\frac{d[A]}{dt}=-k_a[A]},\qquad [A]=[A]_0e^{-k_at}.
$$

### 3)

$$
\boxed{\frac{d[B]}{dt}=k_a[A]-k_b[B]}.
$$

### 4)
以下では$k_a,k_b>0$、$k_a\ne k_b$ とする。

積分因子 $e^{k_bt}$ を用いると

$$
[B]=\frac{k_a[A]_0}{k_b-k_a}\left(e^{-k_at}-e^{-k_bt}\right).
$$

したがって

$$
[C]=\left\{1+\frac{k_ae^{-k_bt}-k_be^{-k_at}}{k_b-k_a}\right\}[A]_0,
$$

ゆえに空欄は

$$
\boxed{k_ae^{-k_bt}-k_be^{-k_at}}.
$$

### 5)

$$
\frac{d[B]}{dt}=0
\iff k_be^{-k_bt}=k_ae^{-k_at}.
$$

よって

$$
\boxed{t_{\max}=\frac{\log(k_b/k_a)}{k_b-k_a}}.
$$

$k_a=k_b=k>0$ の場合は、上の式の極限または速度式を直接解くことで $[B]=k[A]_0te^{-kt}$、$[C]=[A]_0\{1-(1+kt)e^{-kt}\}$、$t_{\max}=1/k$ となる。

## **Reference**

- [東京科学大学 大学院 過去の入試問題](https://admissions.isct.ac.jp/ja/013/graduate/examination-questions)
- [生命理工学系 2023年実施問題（2024年度入試）](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_bio_20238&key=684a39c36a0644cea000cc3c0fdeb42b.pdf&pageId=3186&prevId=&type=1)
