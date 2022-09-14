<template>
  <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
    <a-collapse-panel key="1" header="Discovery and Pre Clinical" class="kap">
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
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-493477826-540x360-2.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/genome-sequencing/target-capture-sequencing/human-whole-exome-sequencing/"
          >
            <a-card-meta
              title="Human Whole Exome Sequencing"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Human Whole Exome Sequencing</template
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
            href="https://en.novogene.com/services/research-services/transcriptome-sequencing/mrna-sequencing/"
          >
            <a-card-meta
              title="mRNA Sequencing (mRNA-seq)"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >mRNA Sequencing (mRNA-seq)</template
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
            href="https://en.novogene.com/services/biopharma-services/discovery-and-pre-clinical/ffpe-rna-seq/"
          >
            <a-card-meta title="FFPE RNA-seq">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >FFPE RNA-seq</template
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
            <template #description
              >Human Whole Genome Sequencing</template
            >
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
            <a-card-meta title="Isoform Sequencing (Full-length Transcript Sequencing)">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Isoform Sequencing (Full-length Transcript Sequencing)</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2022/04/Pre-made.png"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/research-services/pre-made-library-sequencing/"
          >
            <a-card-meta title="Pre-made Library Sequencing">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Pre-made Library Sequencing</template
            >
          </a-card-meta>
        </a-card>
      </p>
    </a-collapse-panel>

    <a-collapse-panel key="2" header="Translational and Clinical" class="kap">
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-520665143-638x428-1.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/novopm-2-0/"
          >
            <a-card-meta title="NovoPM™ 2.0">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >NovoPM™ 2.0</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/image0-2.jpeg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/biopharma-services/translational-and-clinical/novoneoantigen-2-0/"
          >
            <a-card-meta title="NovoNeoantigen™ 2.0">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description>NovoNeoantigen™ 2.0</template>
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/intro-istockphoto-1135102018-638x428-1.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/biopharma-services/translational-and-clinical/star-allele-analysis/"
          >
            <a-card-meta
              title="Star Allele Analysis"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Star Allele Analysis</template
            >
          </a-card-meta>
        </a-card>
      </p>
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/699pic_06z13k_xmt.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/biopharma-services/translational-and-clinical/tumor-microenvironment-analysis/"
          >
            <a-card-meta
              title="Tumor Microenvironment Analysis"
            >
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description
              >Tumor Microenvironment Analysis</template
            >
          </a-card-meta>
        </a-card>
      </p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="Companion Diagnostics" class="kap">
      <p>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img
              alt="example"
              src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/699pic_0cdser_xmt.jpg"
            />
          </template>
          <a
            target="_blank"
            href="https://en.novogene.com/services/biopharma-services/companion-diagnostics/"
          >
            <a-card-meta title="Companion Diagnostics">
            </a-card-meta>
          </a>
          <a-card-meta>
            <template #description>Companion Diagnostics</template>
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
