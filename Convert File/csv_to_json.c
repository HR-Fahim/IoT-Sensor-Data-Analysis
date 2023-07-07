#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024
#define MAX_FIELD_LENGTH 256

typedef struct {
    char sensorId[MAX_FIELD_LENGTH];
    char timestamp[MAX_FIELD_LENGTH];
    double value;
} SensorData;

int main() {
    FILE* csvFile = fopen("CSV\\SENSORDATA.csv", "r");
    FILE* jsonFile = fopen("JSON\\sensorData.json", "w");

    if (csvFile == NULL) {
        printf("Failed to open CSV file.\n");
        return 1;
    }

    if (jsonFile == NULL) {
        printf("Failed to create JSON file.\n");
        fclose(csvFile);
        return 1;
    }

    char line[MAX_LINE_LENGTH];
    fgets(line, sizeof(line), csvFile);  // Read and discard the header line

    fprintf(jsonFile, "[");

    int firstEntry = 1;  // Flag to check if it's the first JSON object

    while (fgets(line, sizeof(line), csvFile)) {
        SensorData data;
        sscanf(line, "%[^,],%[^,],%lf", data.sensorId, data.timestamp, &data.value);

        if (!firstEntry) {
            fprintf(jsonFile, ",");
        }
        else {
            firstEntry = 0;
        }

        fprintf(jsonFile, "\n  {\n");
        fprintf(jsonFile, "    \"sensorId\": \"%s\",\n", data.sensorId);
        fprintf(jsonFile, "    \"timestamp\": \"%s\",\n", data.timestamp);
        fprintf(jsonFile, "    \"value\": %.1f\n", data.value);
        fprintf(jsonFile, "  }");
    }

    fprintf(jsonFile, "\n]\n");

    fclose(csvFile);
    fclose(jsonFile);

    printf("Conversion complete.\n");

    return 0;
}
