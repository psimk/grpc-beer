# #!/bin/sh
PROTOC_PLUGIN_PATH="./server/node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTOC_PLUGIN_GRPC_TS_PATH="./server/node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts"
PROTOC_PLUGIN_TS_PATH="./server/node_modules/.bin/protoc-gen-ts"

OUT_DIR="generated"
OUT_DIR="generated"
CLIENT_OUT_DIR="client/src/stubs/${OUT_DIR}"
SERVER_OUT_DIR="server/src/stubs/${OUT_DIR}"


rm -rf $CLIENT_OUT_DIR
rm -rf $SERVER_OUT_DIR

mkdir -p ${OUT_DIR}

# Generate JS for protobuf

protoc \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  -I=./protos \
  protos/*.proto

# Generate JS GRPC Stubs

protoc \
  --plugin="protoc-gen-grpc=${PROTOC_PLUGIN_PATH}" \
  --grpc_out="${OUT_DIR}" \
  -I=./protos \
  protos/*.proto

# TS Type definitions for protobuf and GRPC stubs

protoc \
  --plugin="protoc-gen-grpc=${PROTOC_PLUGIN_GRPC_TS_PATH}" \
  --grpc_out="${OUT_DIR}" \
  -I=./protos \
  protos/*.proto

# Generate Web GRPC service stubs

protoc \
  --plugin="protoc-gen-ts=${PROTOC_PLUGIN_TS_PATH}" \
  --ts_out="service=true:${OUT_DIR}" \
  -I=./protos \
  protos/*.proto

cp -r $OUT_DIR $CLIENT_OUT_DIR
cp -r $OUT_DIR $SERVER_OUT_DIR
rm -rf $OUT_DIR
