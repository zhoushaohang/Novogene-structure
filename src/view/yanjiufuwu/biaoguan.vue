<template>
  <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
    <a-collapse-panel key="1" header="Genome Sequencing">
      <a-collapse default-active-key="4">
        <a-collapse-panel key="4" header="Whole Genome Sequencing" class="kap">
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2021/05/istockphoto-1140489499-540x360-2-1.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/whole-genome-sequencing/human-whole-genome-sequencing/"
              >
                <a-card-meta title="Human Whole Genome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Human Whole Genome Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-801314880-540x360-2.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/whole-genome-sequencing/animal-plant-whole-genome-sequencing-wgs/"
              >
                <a-card-meta title="Animal and Plant Whole Genome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Animal and Plant Whole Genome Sequencing</template
                >
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-182867285-540x360-4.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/whole-genome-sequencing/microbial-whole-genome-resequencing-wgs/"
              >
                <a-card-meta title="Microbial Whole Genome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Microbial Whole Genome Sequencing</template
                >
              </a-card-meta>
            </a-card>
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse default-active-key="41">
        <a-collapse-panel
          key="5"
          header="Target Capture Sequencing"
          class="kap"
        >
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2021/05/istockphoto-1140489499-540x360-3-300x200-1.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/target-capture-sequencing/human-whole-exome-sequencing/"
              >
                <a-card-meta title="Human Whole Exome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Human Whole Exome Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-940800024-540x360-1.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/target-capture-sequencing/mouse-whole-exome-sequencing-wes/"
              >
                <a-card-meta title="Mouse Whole Exome Sequencing (mWES)">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Mouse Whole Exome Sequencing (mWES)</template
                >
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/intro-cliacap-638x428-2.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/whole-genome-sequencing/microbial-whole-genome-resequencing-wgs/"
              >
                <a-card-meta title="Clinical Whole Exome Sequencing (CLIA/CAP)">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Clinical Whole Exome Sequencing (CLIA/CAP)</template
                >
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1132207850-540x360-4.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/target-capture-sequencing/target-region-sequencing-trs/"
              >
                <a-card-meta title="Target Region Sequencing (TRS)">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Target Region Sequencing (TRS)</template>
              </a-card-meta>
            </a-card>
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse default-active-key="42">
        <a-collapse-panel key="6" header="De novo Sequencing" class="kap">
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-160756458-540x360-3.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/denovo-sequencing/animal-plant-denovo-sequencing/"
              >
                <a-card-meta title="Animal and Plant De novo Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Animal and Plant De novo Sequencing</template
                >
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2021/05/istockphoto-1140489499-540x360-3-300x200-1.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/genome-sequencing/target-capture-sequencing/human-whole-exome-sequencing/"
              >
                <a-card-meta title="Human Whole Exome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Human Whole Exome Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
        </a-collapse-panel>
      </a-collapse>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="Transcriptome Sequencing">
      <a-collapse default-active-key="43">
        <a-collapse-panel key="7" header="Eukaryote">
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1157314129-540x360-2.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/mrna-sequencing/"
              >
                <a-card-meta title="mRNA Sequencing (mRNA-seq)"> </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>mRNA Sequencing (mRNA-seq)</template>
              </a-card-meta>
            </a-card>
          </p>
          <a-collapse default-active-key="23">
            <a-collapse-panel
              key="7"
              header="Non-coding RNA Sequencing"
              class="kap"
            >
              <p>
                <a-card hoverable style="width: 240px">
                  <template #cover>
                    <img
                      alt="example"
                      src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-861606270-540x360-1.jpg"
                    />
                  </template>
                  <a
                    target="_blank"
                    href="https://en.novogene.com/services/research-services/transcriptome-sequencing/non-coding-rna-sequencing/long-non-coding-rna-sequencing-lncrna-seq/"
                  >
                    <a-card-meta
                      title="Long Non-coding RNA Sequencing (lncRNA-seq)"
                    >
                    </a-card-meta>
                  </a>
                  <a-card-meta>
                    <template #description
                      >Long Non-coding RNA Sequencing (lncRNA-seq)</template
                    >
                  </a-card-meta>
                </a-card>
              </p>
              <p>
                <a-card hoverable style="width: 240px">
                  <template #cover>
                    <img
                      alt="example"
                      src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1184922393-540x360-2.jpg"
                    />
                  </template>
                  <a
                    target="_blank"
                    href="https://en.novogene.com/services/research-services/transcriptome-sequencing/non-coding-rna-sequencing/small-rna-sequencing-srna-seq/"
                  >
                    <a-card-meta title="Small RNA Sequencing (sRNA-seq)">
                    </a-card-meta>
                  </a>
                  <a-card-meta>
                    <template #description
                      >Small RNA Sequencing (sRNA-seq)</template
                    >
                  </a-card-meta>
                </a-card>
              </p>
              <p>
                <a-card hoverable style="width: 240px">
                  <template #cover>
                    <img
                      alt="example"
                      src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1157314129-540x360-2.jpg"
                    />
                  </template>
                  <a
                    target="_blank"
                    href="https://en.novogene.com/services/research-services/transcriptome-sequencing/non-coding-rna-sequencing/circular-rna-sequencing-circrna-seq/"
                  >
                    <a-card-meta title="Circular RNA Sequencing (circRNA-seq)">
                    </a-card-meta>
                  </a>
                  <a-card-meta>
                    <template #description
                      >Circular RNA Sequencing (circRNA-seq)</template
                    >
                  </a-card-meta>
                </a-card>
              </p>
            </a-collapse-panel>
          </a-collapse>
          <p>
            <a-card hoverable style="width: 240px; margin-top: 30px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1132207850-540x360-4.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/whole-transcriptome-sequencing/"
              >
                <a-card-meta title="Whole Transcriptome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Whole Transcriptome Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-637795146-348x273-1.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/isoform-sequencing-service-iso-seq/"
              >
                <a-card-meta
                  title="Isoform Sequencing (Full-length Transcript Sequencing)"
                >
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description
                  >Isoform Sequencing (Full-length Transcript
                  Sequencing)</template
                >
              </a-card-meta>
            </a-card>
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse default-active-key="44">
        <a-collapse-panel key="8" header="Prokaryote" class="kap">
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1154778478-540x360-2.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/prokaryotic-rna-sequencing/"
              >
                <a-card-meta title="Prokaryotic RNA Sequencing"> </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Prokaryotic RNA Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
          <p>
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1183894394-540x360-2.jpg"
                />
              </template>
              <a
                target="_blank"
                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/metatranscriptome-sequencing/"
              >
                <a-card-meta title="Metatranscriptome Sequencing">
                </a-card-meta>
              </a>
              <a-card-meta>
                <template #description>Metatranscriptome Sequencing</template>
              </a-card-meta>
            </a-card>
          </p>
        </a-collapse-panel>
      </a-collapse>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="Epigenome Sequencing" class="kap">
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/07/istockphoto-513110674-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/epigenome-sequencing/whole-genome-bisulfite-sequencing/"
          >
            <a-card-meta title="Whole Genome Bisulfite Sequencing">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description>Whole Genome Bisulfite Sequencing</template>
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-493477826-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/epigenome-sequencing/reduced-representation-bisulfite-sequencing-rrbs/"
          >
            <a-card-meta
              title="Reduced Representation Bisulfite Sequencing (RRBS)"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Reduced Representation Bisulfite Sequencing (RRBS)</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2021/08/istockphoto-1089399222-540x360-2-300x200-1.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/epigenome-sequencing/chromatin-immunoprecipitation-sequencing-chip-seq/"
          >
            <a-card-meta
              title="Chromatin Immunoprecipitation Sequencing (ChIP-seq)"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Chromatin Immunoprecipitation Sequencing (ChIP-seq)</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-493302736-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/epigenome-sequencing/rip-seq/"
          >
            <a-card-meta title="RNA Immunoprecipitation Sequencing (RIP-seq)">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >RNA Immunoprecipitation Sequencing (RIP-seq)</template
            >
          </a-card-meta>
        </a-card>
      </p>
    </a-collapse-panel>
    <a-collapse-panel key="4" header="Metagenome Sequencing" class="kap">
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2021/06/novogene-istockphoto.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/metagenome-sequencing/16s-18s-its-amplicon-metagenomic-sequencing/"
          >
            <a-card-meta title="16S/18S/ITS Amplicon Metagenomic Sequencing">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >16S/18S/ITS Amplicon Metagenomic Sequencing</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-985169498-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/metagenome-sequencing/shotgun-metagenomic-sequencing/"
          >
            <a-card-meta title="Shotgun Metagenomic Sequencing"> </a-card-meta>
          </a>
          <a-card-meta>
            <template #description>Shotgun Metagenomic Sequencing</template>
          </a-card-meta>
        </a-card>
      </p>
    </a-collapse-panel>
    <a-collapse-panel key="5" header="Pre-made Library Sequencing">
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-600682490-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/pre-made-library-sequencing/"
          >
            <a-card-meta title="Pre-made Library Sequencing"> </a-card-meta>
          </a>
          <a-card-meta>
            <template #description>Pre-made Library Sequencing</template>
          </a-card-meta>
        </a-card>
      </p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const activeKey = ref([]);

    const changeActivekey = (key) => {
      console.log(key);
    };

    return {
      activeKey,
      changeActivekey,
    };
  },
});
</script>
<style>
.kap p {
  float: left;
  margin-left: 20px;
}
</style>
