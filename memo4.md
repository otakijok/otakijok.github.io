**プロジェクト名:** ローカルLLM構築とAWS (高火力DOK) 検証
**目的:** Ollamaを用いたローカルLLM構築の事前検証

---
**[1. ローカルPC要件]**

* **CPU:** AMD Ryzen 7 9700X (8コア/16スレッド)
* **メモリ:** DDR5-5600, 32GB
* **GPU:** NVIDIA GeForce RTX 4060 Ti または 5060 Ti 16GB
* **ストレージ:** M.2 2TB

---
**[2. 検証プラットフォーム: さくらインターネット 高火力DOK]**

* **利用予定GPU:** NVIDIA V100 32GB
* **除外GPU:** NVIDIA H100 80GB (コスト考慮のため)
* **検証方法:** Ollamaコンテナのデプロイ、LLMの動作検証

---
**[3. GPU性能比較]**

| 項目                 | NVIDIA GeForce RTX 4060 Ti 16GB | NVIDIA GeForce RTX 5060 Ti 16GB (予想) | NVIDIA V100 32GB (高火力DOK) |
| :------------------- | :-------------------------------- | :--------------------------------------- | :--------------------------- |
| **アーキテクチャ** | Ada Lovelace                      | Blackwell (予想)                         | Volta                        |
| **CUDAコア数** | 4352                              | 4608                                     | 5120                         |
| **Tensorコア数** | 136                               | 144                                      | 640                          |
| **メモリ容量** | 16GB GDDR6                        | 16GB GDDR7                               | 32GB HBM2                    |
| **メモリ帯域幅** | 288 GB/s                          | 448 GB/s (予想)                          | 900 GB/s                     |
| **FP32性能 (TFLOPS)** | 約22-24                           | 約24                                     | 14-15                        |
| **FP16 Tensor性能 (TFLOPS)** | 353 AI TOPS (RTX 4060 Ti 8GBのAI TOPSより推定) | 759 AI TOPS                              | 120-125                      |
| **用途** | ゲーミング/クリエイター           | ゲーミング/クリエイター                  | AI/HPC (データセンター)      |

**主要な性能差 (V100 vs GeForce):**
* **メモリ容量:** V100 (32GB HBM2) > GeForce (16GB GDDR6/7)
* **メモリ帯域幅:** V100 (900 GB/s) >>> GeForce (288-448 GB/s)
* **Tensor性能:** V100 (AI/HPC特化型) >>> GeForce (汎用型)
* **結論:** V100はデータセンター向けにLLMなどのAIワークロードに最適化されており、特に大規模モデルや高速推論において優れた性能を発揮する。GeForceはローカルでの動作用としては十分だが、V100の方がより多くのLLMを快適に検証可能。

---
**[4. おすすめLLM (Ollama向け)]**

* **モデル1: Gemma (Google)**
    * **特徴:** 軽量・高性能、Google開発、商用利用可能。
    * **推奨理由:** 2B/7Bモデルが軽量で、V100 32GBでも十分動作。高い推論品質。
    * **Ollamaコマンド例:** `ollama run gemma:7b`

* **モデル2: Mistral-7B / Mixtral-8x7B (Mistral AI)**
    * **特徴:** 高いコストパフォーマンス、MoEによる高性能 (Mixtral)、商用利用可能。
    * **推奨理由:** 7Bモデルは軽量。Mixtral-8x7BはV100で挑戦可能で、高い性能を体験できる。
    * **Ollamaコマンド例:** `ollama run mistral` / `ollama run mixtral`

* **モデル3: Llama 3 (Meta)**
    * **特徴:** 最新・最先端の性能、大規模コミュニティ、日本語対応。
    * **推奨理由:** 8BモデルはV100で快適に動作し、非常に高い品質の応答を期待できる。
    * **Ollamaコマンド例:** `ollama run llama3`

---
**[5. 次のステップ]**

1.  高火力DOKのV100インスタンスを準備。
2.  Ollamaをデプロイ。
3.  上記おすすめLLMを順に試用し、それぞれのモデルの動作速度、メモリ使用量、応答品質を確認。
4.  高火力DOKでの検証結果を基に、ローカルPC構築の具体的なGPU選定（RTX 4060 Ti vs 5060 Ti）の参考に。
